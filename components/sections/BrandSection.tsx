import Image from "next/image";
import { LuMountain, LuBuilding2, LuSprout } from "react-icons/lu";

const REGIONS = [
  {
    icon: LuMountain,
    ko: "상주",
    en: "SANGJU",
    desc: "지역의 가능성을 함께 키우고",
  },
  {
    icon: LuBuilding2,
    ko: "문경",
    en: "MUNGYEONG",
    desc: "새로운 기회를 만들어가며",
  },
  {
    icon: LuSprout,
    ko: "예천",
    en: "YECHEON",
    desc: "지속 가능한 성장을 돕습니다.",
  },
];

export default function BrandSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden">
      <Image
        src="/images/BG_company.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-white/75 md:hidden" />
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0.12) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-360 px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="text-xs font-medium tracking-[0.5em] text-azure-700">
          YEONWOO
        </p>

        <div className="mt-6 flex items-start justify-center gap-4 sm:gap-8">
          <div>
            <Image
              src="/images/hanja-yeon.png"
              alt="緣"
              width={583}
              height={453}
              className="mx-auto h-15 w-auto sm:h-18"
            />
            <p className="mt-3 text-xs text-azure-700">인연 연(緣)</p>
          </div>
          <span
            aria-hidden
            className="mt-[30px] h-px w-12 bg-accent-600/70 sm:mt-9 sm:w-16"
          />
          <div>
            <Image
              src="/images/hanja-woo.png"
              alt="友"
              width={528}
              height={438}
              className="mx-auto h-15 w-auto sm:h-18"
            />
            <p className="mt-3 text-xs text-azure-700">벗 우(友)</p>
          </div>
        </div>

        <h2 className="mt-9 text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
          인연으로 만나,
          <br />
          믿음으로 함께합니다.
        </h2>

        <p className="mx-auto mt-6 leading-relaxed text-azure-800">
          사업의 시작부터 성장까지,
          <br />
          필요한 순간 언제든 찾을 수 있는
          <br />
          가까운 벗이 되겠습니다.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3">
          {REGIONS.map((region) => (
            <div
              key={region.ko}
              className="flex items-center gap-4 rounded-2xl bg-white/90 px-5 py-4 text-left sm:px-6 sm:py-5 shadow-[0_14px_32px_-14px_rgba(43,112,160,0.35)] backdrop-blur-sm"
            >
              <region.icon className="h-7 w-7 shrink-0 text-azure-600 sm:h-9 sm:w-9" />
              <div>
                <p className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-azure-950">
                    {region.ko}
                  </span>
                  <span className="text-xs font-medium tracking-wide text-azure-500">
                    {region.en}
                  </span>
                </p>
                <p className="mt-1 text-sm text-azure-700">{region.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
