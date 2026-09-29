import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[480px] items-center overflow-hidden sm:min-h-[540px] lg:min-h-[640px]"
    >
      <Image
        src="/images/hero/hero-v4.jpg"
        alt="상주 · 문경 · 예천에서 사업을 운영하는 사장님들"
        fill
        priority
        quality={90}
        sizes="(min-width: 1024px) max(100vw, 2048px), (min-width: 640px) max(100vw, 1800px), 1630px"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-40% to-white/0 to-70% lg:via-white/45 lg:via-35% lg:to-transparent lg:to-55%" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-md sm:max-w-lg">
          <p className="text-sm font-semibold tracking-wide text-accent-600">
            상주 · 문경 · 예천 소상공인 자금 상담
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-azure-950 sm:text-5xl">
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
