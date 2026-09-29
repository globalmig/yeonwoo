import { LuWallet, LuBuilding2, LuTrendingUp, LuShieldCheck } from "react-icons/lu";

const FUNDS = [
  {
    no: "01",
    icon: LuWallet,
    title: "운영자금",
    desc: "사업 운영에 필요한 자금",
  },
  {
    no: "02",
    icon: LuBuilding2,
    title: "시설자금",
    desc: "설비 · 시설 투자에 필요한 자금",
  },
  {
    no: "03",
    icon: LuTrendingUp,
    title: "성장자금",
    desc: "사업 확장과 성장을 위한 자금",
  },
  {
    no: "04",
    icon: LuShieldCheck,
    title: "경영안정자금",
    desc: "경영 부담을 줄이기 위한 자금",
  },
];

export default function ServiceSection() {
  return (
    <section id="service">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-md">
          <p className="text-sm font-semibold tracking-wide text-accent-600">
            연우가 함께하는 자금
          </p>
          <h2 className="mt-3 break-keep text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
            어떤 자금이 필요한지부터 함께 확인합니다.
          </h2>
        </div>

        <div className="mt-12 border-t border-azure-100">
          {FUNDS.map((fund) => (
            <div
              key={fund.title}
              className="flex flex-col gap-1 border-b border-azure-100 py-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="font-serif text-2xl text-azure-200 sm:w-14 sm:shrink-0">
                {fund.no}
              </span>
              <div className="flex items-center gap-2 sm:w-52 sm:shrink-0">
                <fund.icon className="text-accent-600" size={18} />
                <span className="text-lg font-bold text-azure-900">
                  {fund.title}
                </span>
              </div>
              <span className="text-sm leading-relaxed text-azure-600">
                {fund.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4">
          <a
            href="#contact"
            className="rounded-full bg-azure-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-azure-700"
          >
            내 사업에 맞는 자금 확인하기
          </a>
          <p className="max-w-lg text-xs leading-relaxed text-azure-400">
            ※ 실제 적용 가능한 자금은 사업자의 업종, 매출, 신용, 사업기간 및
            해당 사업의 요건에 따라 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
