export const REGIONS = ["상주", "문경", "예천", "기타"];

// 스팸 봇 차단용 허니팟 필드 이름 (사람에게는 보이지 않는 입력칸)
export const HONEYPOT_FIELD = "website";

export interface ContactPayload {
  name: string;
  phone: string;
  callTime: string;
  region: string;
  business: string;
  message: string;
}

// 필드별 최대 길이 — 비정상적으로 긴 입력 차단
const MAX_LENGTH: Record<keyof ContactPayload, number> = {
  name: 30,
  phone: 20,
  callTime: 50,
  region: 10,
  business: 50,
  message: 1000,
};

const OPTIONAL: (keyof ContactPayload)[] = ["message"];

type ParseResult = { ok: true; data: ContactPayload } | { ok: false; error: string };

export function parseContact(input: unknown): ParseResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "잘못된 요청입니다." };
  }
  const raw = input as Record<string, unknown>;

  const data = {} as ContactPayload;
  for (const key of Object.keys(MAX_LENGTH) as (keyof ContactPayload)[]) {
    const value = typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
    if (!value && !OPTIONAL.includes(key)) {
      return { ok: false, error: "필수 항목을 모두 입력해주세요." };
    }
    if (value.length > MAX_LENGTH[key]) {
      return { ok: false, error: "입력 내용이 너무 깁니다." };
    }
    data[key] = value;
  }

  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 11) {
    return { ok: false, error: "연락처를 정확히 입력해주세요." };
  }
  if (!REGIONS.includes(data.region)) {
    return { ok: false, error: "사업 지역을 선택해주세요." };
  }
  if (raw.privacyAgreed !== true) {
    return { ok: false, error: "개인정보 수집·이용에 동의해주세요." };
  }

  return { ok: true, data };
}

// 재피어 문자 발송용 본문 — 재피어에서는 이 필드 하나만 연결하면 됨
export function formatSmsText(data: ContactPayload, submittedAt: string) {
  return [
    "[연우] 새 상담 신청",
    `이름: ${data.name}`,
    `연락처: ${data.phone}`,
    `통화 가능: ${data.callTime}`,
    `지역: ${data.region} / 업종: ${data.business}`,
    data.message && `내용: ${data.message}`,
    `접수: ${submittedAt}`,
  ]
    .filter(Boolean)
    .join("\n");
}
