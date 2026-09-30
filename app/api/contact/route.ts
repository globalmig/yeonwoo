import { HONEYPOT_FIELD, parseContact } from "@/lib/contact";

const ZAPIER_TIMEOUT_MS = 10_000;

// 한국 시간 "YYYY-MM-DD HH:mm:ss" (sv-SE 로케일이 이 형식을 사용)
function nowKST() {
  return new Date().toLocaleString("sv-SE", { timeZone: "Asia/Seoul" });
}

export async function POST(request: Request) {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[contact] ZAPIER_WEBHOOK_URL 환경변수가 설정되지 않았습니다.");
    return Response.json({ error: "서버 설정 오류" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // 허니팟이 채워져 있으면 봇으로 보고 전송 없이 성공 응답
  if (typeof body === "object" && body !== null && (body as Record<string, unknown>)[HONEYPOT_FIELD]) {
    return Response.json({ ok: true });
  }

  const result = parseContact(body);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...result.data,
        privacyAgreed: true,
        submittedAt: nowKST(),
      }),
      signal: AbortSignal.timeout(ZAPIER_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`Zapier 응답 ${res.status}`);
  } catch (err) {
    console.error("[contact] Zapier 전송 실패", err);
    return Response.json({ error: "전송 실패" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
