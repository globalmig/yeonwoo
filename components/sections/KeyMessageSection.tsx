import Image from "next/image";
import type { CSSProperties } from "react";
import {
  LuCheck,
  LuChevronRight,
  LuCrown,
  LuMessageCircleMore,
} from "react-icons/lu";

const REASONS = [
  {
    no: 2,
    badge: "사업 성장의 발판",
    title: "사업 확장 기회 확보",
    desc: ["매장 확장, 인력 채용 등", "사업 성장을 위한 자금을 지원합니다."],
    icon: { src: "/images/icon/icon_02.png", width: 944, height: 812 },
    alt: "가게 옆으로 올라가는 막대그래프와 화살표",
    circle: "bg-accent-600",
    tint: "bg-accent-50 text-accent-600",
  },
  {
    no: 3,
    badge: "든든한 경영 안정화",
    title: "금리 부담 최소화",
    desc: ["낮은 금리로 안정적인", "경영을 유지할 수 있습니다."],
    icon: { src: "/images/icon/icon_03.png", width: 837, height: 669 },
    alt: "원화 표시가 있는 방패와 동전, 새싹",
    circle: "bg-azure-800",
    tint: "bg-azure-100/70 text-azure-800",
  },
];

const CARD_SHADOW = "shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)]";

/* 사장님 사진은 참고 시안에서 잘라낸 임시본(원본을 받으면 같은 파일명으로 교체) —
   가장자리를 배경에 녹여 시안처럼 경계 없이 보이게 */
const OWNER_FADE: CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent), linear-gradient(to bottom, transparent, #000 10%, #000 75%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent), linear-gradient(to bottom, transparent, #000 10%, #000 75%, transparent)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

export default function KeyMessageSection() {
  return (
    <section>
      <div className="mx-auto max-w-360 px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)]">
          <div>
            <p className="inline-flex rounded-full bg-azure-100 px-4 py-1.5 text-sm font-bold text-azure-700 sm:text-base">
              지금, 소상공인에게
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-azure-950 min-[360px]:text-4xl sm:text-5xl">
              소상공인이 정책자금을
              <br />
              <span className="text-azure-600">꼭 활용해야 하는 이유</span>
              <TopBadge />
            </h2>
            <p className="mt-6 leading-relaxed text-azure-700">
              소상공인에게 정책자금 대출은 단순한 자금 지원이 아닙니다.
              <br className="hidden sm:block" /> 지속 가능한 경영과 더 큰
              성장을 위한 든든한 발판입니다.
            </p>
          </div>

          <div
            className="relative mx-auto aspect-656/360 w-full max-w-xl lg:max-w-none"
            style={OWNER_FADE}
          >
            <Image
              src="/images/reasons/reasons-owner.png"
              alt="가게 앞에서 미소 짓는 사장님과 ‘더 큰 내일을 응원합니다!’ 손글씨"
              fill
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) 416px, (min-width: 640px) 576px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="mx-auto mt-10 grid max-w-xl gap-5 lg:max-w-none lg:grid-cols-3">
          <li className="flex flex-col overflow-hidden rounded-2xl border-2 border-azure-500 bg-linear-to-b from-azure-50 to-white shadow-[0_18px_40px_-14px_rgba(43,112,160,0.5)]">
            <div className="relative isolate flex-1 bg-linear-to-r from-azure-600 to-azure-500 px-5 pb-14 pt-5 text-white sm:px-6 sm:pt-6">
              <Image
                src="/images/icon/icon_01.png"
                alt="위치 표시와 시계가 있는 가게, 지폐 묶음"
                width={907}
                height={741}
                sizes="(min-width: 1024px) 192px, (min-width: 640px) 160px, 128px"
                className="absolute bottom-12 right-4 -z-10 h-auto w-32 drop-shadow-[0_14px_20px_rgba(20,42,60,0.35)] sm:w-40 lg:w-48"
              />

              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-azure-400 to-azure-700 text-3xl font-extrabold ring-4 ring-white shadow-lg sm:h-16 sm:w-16">
                  1
                </span>
                <span className="relative rounded-full bg-white/20 px-3.5 py-1 text-sm font-bold ring-1 ring-white/40">
                  <LuCrown
                    className="absolute -top-3.5 left-2 size-4 fill-amber-300 text-amber-300"
                    size={16}
                    aria-hidden
                  />
                  가장 중요한 이유
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold leading-snug sm:text-3xl">
                당장 필요한
                <br />
                운영자금 확보
              </h3>
              <p className="mt-3 leading-relaxed text-white/90">
                매출 공백에도 안정적으로
                <br />
                버틸 수 있습니다.
              </p>
            </div>

            <div className="relative -mt-8 px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="inline-flex items-center gap-2.5 rounded-full bg-white py-3 pl-3 pr-5 font-bold text-azure-950 shadow-[0_10px_24px_-10px_rgba(43,112,160,0.45)]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-azure-600 text-white">
                  <LuCheck className="size-4" size={16} strokeWidth={3} aria-hidden />
                </span>
                <span>
                  <span className="text-azure-600">
                    최대 <strong className="text-lg font-extrabold">1억 원</strong>
                  </span>
                  까지 지원 가능
                </span>
              </p>
            </div>
          </li>

          {REASONS.map((reason) => (
            <li
              key={reason.no}
              className={`flex flex-col rounded-2xl border border-azure-100/70 bg-white p-5 sm:p-6 ${CARD_SHADOW}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl font-extrabold text-white sm:h-14 sm:w-14 ${reason.circle}`}
                >
                  {reason.no}
                </span>
                <span
                  className={`rounded-full px-3.5 py-1 text-sm font-bold ${reason.tint}`}
                >
                  {reason.badge}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold leading-snug text-azure-950 sm:text-3xl">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-azure-700">
                {reason.desc[0]}
                <br />
                {reason.desc[1]}
              </p>

              <div className="mt-auto pt-6">
                <Image
                  src={reason.icon.src}
                  alt={reason.alt}
                  width={reason.icon.width}
                  height={reason.icon.height}
                  sizes="(min-width: 640px) 208px, 176px"
                  className="mx-auto h-auto w-44 sm:w-52"
                />
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-azure-600 py-3 pl-3 pr-6 text-lg font-bold text-white shadow-[0_14px_30px_-12px_rgba(43,112,160,0.6)] transition-colors hover:bg-azure-700 sm:text-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-azure-600">
              <LuMessageCircleMore className="size-5" size={20} aria-hidden />
            </span>
            무료 상담 신청하기
            <LuChevronRight className="size-5" size={20} aria-hidden />
          </a>
          <p className="mt-3 text-sm text-azure-700">
            전문 상담을 통해 나에게 맞는 정책자금을 찾아보세요.
          </p>
        </div>
      </div>
    </section>
  );
}

function TopBadge() {
  return (
    <span className="relative ml-3 inline-block align-middle">
      <span className="inline-flex -rotate-6 items-center rounded-[50%] border-2 border-azure-600 px-4 py-0.5 text-lg font-extrabold italic text-azure-600 sm:text-2xl">
        TOP 3
      </span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        className="absolute -right-3.5 -top-3.5 hidden size-6 text-azure-600 sm:block"
      >
        <path d="M8 10 7 3M12 13l6-6M14 19l7-1" />
      </svg>
    </span>
  );
}
