import type { ReactNode } from "react";
import { LuCheck } from "react-icons/lu";

function Mark({ children }: { children: ReactNode }) {
  return <strong className="font-extrabold text-amber-200">{children}</strong>;
}

const BENEFITS = [
  {
    no: "01",
    title: ["지역 맞춤형", "정보와 빠른 대응"],
    check: (
      <>
        지역 특화 정보로 <Mark>시간</Mark>과 <Mark>비용</Mark>을 절약할 수
        있습니다.
      </>
    ),
    bg: "bg-azure-600",
    text: "text-azure-600",
  },
  {
    no: "02",
    title: ["지역 사업환경에", "최적화된 컨설팅"],
    check: (
      <>
        우리 지역에 딱 맞는 <Mark>현실적인 해결책</Mark>을 제시합니다.
      </>
    ),
    bg: "bg-accent-600",
    text: "text-accent-600",
  },
  {
    no: "03",
    title: ["지속적인 관리와", "신뢰할 수 있는 파트너"],
    check: (
      <>
        믿을 수 있는 전문가가 <Mark>오래도록 함께</Mark>합니다.
      </>
    ),
    bg: "bg-azure-800",
    text: "text-azure-800",
  },
];

const CARD_SHADOW = "shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)]";

export default function RegionSection() {
  return (
    <section id="region">
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-lg font-bold leading-snug text-accent-600">
            왜 상주, 문경, 예천만 전문적으로 하는 것이
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-azure-950 min-[360px]:text-4xl sm:text-5xl">
            소비자에게 <span className="text-azure-600">장점</span>이
            <br className="sm:hidden" /> 될까요?
          </h2>
          <p className="mt-6 leading-relaxed text-azure-700">
            지역을 가장 잘 아는 전문가가, 우리 동네 사장님의 성공을 더
            가까이에서 돕습니다.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <li
              key={item.no}
              className={`flex flex-col rounded-2xl border border-azure-100/70 bg-white/95 p-5 sm:p-6 ${CARD_SHADOW}`}
            >
              <div className="mb-6 flex items-center gap-4">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-extrabold text-white sm:h-16 sm:w-16 sm:text-2xl ${item.bg}`}
                >
                  {item.no}
                </span>
                <h3 className="text-xl font-extrabold leading-snug text-azure-950 sm:text-2xl">
                  {item.title[0]}
                  <br />
                  <span className={item.text}>{item.title[1]}</span>
                </h3>
              </div>

              <div
                className={`mt-auto flex items-center gap-3 rounded-xl px-4 py-4 text-white sm:px-5 ${item.bg}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ${item.text}`}
                >
                  <LuCheck className="size-5" size={20} strokeWidth={3} aria-hidden />
                </span>
                <p className="font-medium leading-snug">{item.check}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
