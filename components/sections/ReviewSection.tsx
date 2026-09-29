const REVIEW_SLOTS = [1, 2, 3];

export default function ReviewSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 sm:py-32">
        <h2 className="text-center text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
          연우와 함께한 이야기
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {REVIEW_SLOTS.map((slot) => (
            <div
              key={slot}
              className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-azure-200 bg-azure-50 px-6 py-8"
            >
              <span className="w-fit rounded-full bg-azure-200/60 px-3 py-1 text-xs font-medium text-azure-500">
                지역 · 업종
              </span>
              <p className="flex-1 text-sm leading-relaxed text-azure-400">
                실제 상담 후기가 확보되면 이 영역에 게시됩니다.
              </p>
              <span className="text-xs text-azure-400">후기 준비 중</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-azure-400">
          ※ 실제 고객 후기 확보 전에는 임의의 후기나 지원 성공 사례를
          게시하지 않습니다.
        </p>
      </div>
    </section>
  );
}
