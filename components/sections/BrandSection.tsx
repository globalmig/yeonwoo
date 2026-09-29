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

const HANJA_FONT = {
  fontFamily: '"Batang", "AppleMyungjo", "Noto Serif CJK KR", serif',
};

export default function BrandSection() {
  return (
    <section className="relative isolate overflow-hidden">
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

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="text-xs font-medium tracking-[0.5em] text-azure-700">
          YEONWOO
        </p>

        <div className="mt-6 flex items-start justify-center gap-6 sm:gap-10">
          <div>
            <p
              style={HANJA_FONT}
              className="text-6xl font-bold leading-none text-accent-600 sm:text-7xl"
            >
              緣
            </p>
            <p className="mt-3 text-xs text-azure-700">인연 연(緣)</p>
          </div>
          <span
            aria-hidden
            className="mt-[30px] h-px w-14 bg-accent-600/70 sm:mt-9 sm:w-20"
          />
          <div>
            <p
              style={HANJA_FONT}
              className="text-6xl font-bold leading-none text-accent-600 sm:text-7xl"
            >
              友
            </p>
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

        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
          {REGIONS.map((region) => (
            <div
              key={region.ko}
              className="flex items-center gap-4 rounded-2xl bg-white/90 px-6 py-5 text-left shadow-[0_14px_32px_-14px_rgba(43,112,160,0.35)] backdrop-blur-sm"
            >
              <region.icon className="h-10 w-10 shrink-0 text-azure-600" />
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
