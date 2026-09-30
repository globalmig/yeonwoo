import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex flex-col overflow-hidden sm:min-h-135 sm:flex-row sm:items-center lg:min-h-160"
    >
      {/* Mobile: photo band above the copy. sm+: full-bleed background behind it */}
      <div id="hero-media" className="relative h-85 w-full sm:absolute sm:inset-0 sm:h-auto">
        <Image
          src="/images/hero/hero-v5.png"
          alt="상주 · 문경 · 예천에서 사업을 운영하는 사장님들"
          fill
          priority
          quality={90}
          sizes="(min-width: 1024px) max(100vw, 2048px), (min-width: 640px) max(100vw, 1800px), 1630px"
          className="object-cover object-[85%_center] sm:object-[83%_center] lg:object-right"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-white/0 to-white sm:hidden"
        />
      </div>
      <div className="absolute inset-0 hidden bg-linear-to-r from-white via-white/70 via-40% to-white/0 to-70% sm:block lg:via-white/45 lg:via-35% lg:to-transparent lg:to-55%" />

      <div className="relative mx-auto w-full max-w-360 px-5 pb-16 pt-2 sm:px-8 sm:py-24">
        <div className="max-w-md sm:max-w-lg">
          <p className="text-base font-semibold tracking-wide text-accent-600 sm:text-lg">
            상주 · 문경 · 예천 소상공인 자금 상담
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-azure-950 min-[360px]:text-4xl sm:text-5xl">
            인연으로 만나,
            <br />
            믿음으로 함께합니다.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-azure-600">
            내 사업에 맞는 자금,
            <br />
            연우가 함께 찾아드립니다.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-azure-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-azure-700"
            >
              무료 상담 신청하기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
