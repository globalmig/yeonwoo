import { Fragment, type ReactNode } from "react";
import {
  LuBadgeCheck,
  LuChartColumn,
  LuCircleCheck,
  LuCoins,
  LuCreditCard,
  LuHandCoins,
  LuHandshake,
  LuLandmark,
  LuLayers,
  LuLightbulb,
  LuPercent,
  LuPiggyBank,
  LuStore,
  LuTrendingUp,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import IconBadge from "@/components/IconBadge";
import CountUp from "@/components/CountUp";
import BalanceTrendChart from "@/components/sections/BalanceTrendChart";
import { ShareBars, type ShareItem } from "@/components/sections/DataBars";

const CARD_SHADOW = "shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)]";

/* 막대 높이는 참고 시안의 추이 표현을 따른 것 (실제 비율 아님) */
const BALANCE_TREND = [
  { year: "2023년", value: "1,053.9조", height: "46%" },
  { year: "2024년", value: "1,064.2조", height: "60%" },
  { year: "2025년", sub: "(1분기)", value: "1,069.6조", height: "74%" },
];

const LOAN_SIZE_SHARE: ShareItem[] = [
  { label: "1천만 원 이하", value: "42.8%", percent: 42.8 },
  { label: "1천만~5천만 원", value: "34.2%", percent: 34.2 },
  { label: "5천만 원 이상", value: "23.0%", percent: 23.0 },
];

const INSTITUTION_SHARE: ShareItem[] = [
  { label: "은행권", value: "50.2%", percent: 50.2 },
  { label: "저축은행", value: "16.8%", percent: 16.8 },
  { label: "상호금융", value: "14.3%", percent: 14.3 },
  { label: "기타", value: "18.7%", percent: 18.7 },
];

interface Rate {
  label: string;
  /** 라벨 뒤 괄호 설명 — 좁은 화면에서는 줄을 바꿔 작게 표시 */
  sub?: string;
  rate: string;
  note: string;
  icon?: IconType;
  /** 가장 낮은 금리대 — 진한 카드로 강조 */
  lowest?: boolean;
}

const INSTITUTION_RATES: Rate[] = [
  { label: "은행권", rate: "4.0% ~ 5.0%", note: "신용도, 담보에 따라 차이", icon: LuLandmark },
  { label: "저축은행", rate: "7.0% ~ 12.0%", note: "중금리대, 신용대출 비중 높음", icon: LuPiggyBank },
  { label: "상호금융", rate: "5.0% ~ 7.0%", note: "지역 기반, 담보대출 위주", icon: LuHandshake },
  { label: "기타", sub: "(보험사·카드사 등)", rate: "6.0% ~ 10.0%", note: "신용대출 중심", icon: LuCreditCard },
];

const LOAN_TYPE_RATES: Rate[] = [
  { label: "신용대출(일반)", rate: "6.0% 내외", note: "정부 자료 기준 평균 수준" },
  { label: "담보대출", rate: "4.0% ~ 5.5%", note: "부동산·보증서 등 담보 필요" },
  { label: "정책자금 대출", rate: "2.0% ~ 4.0%", note: "자금별·조건별 상이", lowest: true },
];

/* 막대 길이 = 합계(3조 7,700억 원) 대비 비중 */
const FUND_PLAN: ShareItem[] = [
  { label: "일반경영안정자금", value: "1조 2,200억 원", percent: (12200 / 37700) * 100 },
  { label: "특별경영안정자금", value: "1조 6,000억 원", percent: (16000 / 37700) * 100 },
  { label: "성장기반자금", value: "8,500억 원", percent: (8500 / 37700) * 100 },
  { label: "상생성장지원자금", value: "1,000억 원", percent: (1000 / 37700) * 100 },
];

/* lead + rest = 원문 문장 그대로, lead만 굵게 */
const FUND_CAUTIONS = [
  { lead: "3조 7,700억 원", rest: "은 당초 공급 계획이며, 실제 집행액이 아닙니다." },
  { lead: "약 4조 2,000억 원", rest: "은 정부의 사후 발표 실적으로, 집계 기준이 다를 수 있습니다." },
  { lead: "신청 건수·승인 건수·탈락 건수", rest: " 등은 별도 자료 확인이 필요합니다." },
];

const KEY_POINTS = [
  {
    icon: LuWallet,
    title: "자영업자 대출 잔액",
    value: ["약 1,069.6조 원"],
    meta: "(2025년 1분기 기준)",
    note: "※ 소상공인만의 대출액이 아닌 자영업자 전체 기준",
  },
  {
    icon: LuPercent,
    title: "평균 대출 이율",
    value: ["약 5.5%"],
    meta: "(전체 평균)",
    note: "※ 대출 유형·금융기관에 따라 상이",
  },
  {
    icon: LuLandmark,
    title: "정책자금 공급 계획",
    value: ["3조 7,700억 원"],
    meta: "(2025년)",
    note: "자금별로 지원 규모와 조건이 다름",
  },
  {
    icon: LuBadgeCheck,
    title: "정책자금 실제 지원 실적",
    value: ["약 4조 2,000억 원", "약 12만 개사"],
    meta: "(2025년)",
    note: "※ 계획과 실적은 집계 기준이 다를 수 있음",
  },
];

export default function DataSection() {
  return (
    <section id="data">
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-lg font-bold leading-snug text-accent-600">
              사장님의 든든한 파트너,{" "}
              <span className="text-azure-950">연우</span>
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-azure-950 min-[360px]:text-4xl sm:text-5xl">
              소상공인 <span className="text-azure-600">대출현황</span>
              <br className="lg:hidden" /> 한눈에 보기
            </h2>
            <p className="mt-6 leading-relaxed text-azure-700">
              2025년 기준, 소상공인의 대출 규모와 평균 이율을 한눈에
              정리했습니다.
              <br className="hidden sm:block" /> 정확한 정보로 사업에 필요한
              자금을 더 현명하게 준비하세요.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-azure-100 bg-white/80 px-4 py-3 lg:self-end">
            <IconBadge
              icon={LuStore}
              size={22}
              boxClassName="h-11 w-11"
              className="bg-azure-100/70 text-azure-600"
            />
            <p className="font-bold leading-snug text-azure-800">
              소상공인의
              <br />
              성장을 응원합니다!
            </p>
            <LuTrendingUp className="size-6 text-accent-500" size={24} aria-hidden />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <Panel no={1} title="소상공인·자영업자 대출 현황" period="2025년 기준">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.1fr_1.2fr_1fr]">
              <div className="flex flex-col gap-4">
                <InnerCard variant="hero" className="flex flex-1 flex-col">
                  <CardLabel icon={LuWallet} inverted>
                    자영업자 대출 잔액
                  </CardLabel>
                  <div className="flex flex-1 flex-col justify-center py-5">
                    <p className="text-4xl font-extrabold sm:text-5xl">
                      <CountUp value={1069.6} decimals={1} />
                      <span className="ml-1 text-2xl sm:text-3xl">조 원</span>
                    </p>
                    <p className="mt-2 text-sm text-white/85">(2025년 1분기 기준)</p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-white/85">
                    ※ 소상공인만의 대출액이 아닌 자영업자 전체 기준입니다.
                  </p>
                </InnerCard>

                <InnerCard>
                  <CardLabel icon={LuUsers}>
                    대출 이용자 수
                    <br />
                    <span className="font-medium text-azure-600">(자영업자)</span>
                  </CardLabel>
                  <p className="mt-4 text-3xl font-extrabold text-azure-950 sm:text-4xl">
                    <span className="mr-1 text-lg sm:text-xl">약</span>
                    <CountUp value={370} />
                    <span className="ml-0.5 text-xl sm:text-2xl">만 명</span>
                  </p>
                  <p className="mt-1 text-sm text-azure-600">(2025년 1분기 기준)</p>
                </InnerCard>
              </div>

              <InnerCard className="flex flex-col">
                <CardLabel icon={LuChartColumn}>
                  최근 2년간 자영업자 대출 잔액 추이
                </CardLabel>
                <BalanceTrendChart data={BALANCE_TREND} />
              </InnerCard>

              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
                <InnerCard>
                  <CardLabel icon={LuCoins}>대출 규모별 비중</CardLabel>
                  <ShareBars items={LOAN_SIZE_SHARE} />
                </InnerCard>

                <InnerCard>
                  <CardLabel icon={LuLandmark}>금융기관별 비중</CardLabel>
                  <ShareBars items={INSTITUTION_SHARE} />
                </InnerCard>
              </div>
            </div>

            <Source>
              출처: 국회예산정책처, 「소상공인 지원 재정사업 평가 보고서」(2025년
              6월)
            </Source>
          </Panel>

          <Panel no={2} title="소상공인 대출 평균 이율" period="2025년 기준">
            <div className="flex flex-col gap-4 rounded-2xl bg-linear-to-br from-accent-600 to-azure-700 p-5 text-white sm:flex-row sm:items-center sm:gap-6 sm:p-6 lg:px-10">
              <IconBadge
                icon={LuPercent}
                size={30}
                boxClassName="h-14 w-14 sm:h-16 sm:w-16"
                className="bg-white/15 text-white"
              />
              <div className="shrink-0">
                <p className="text-base font-semibold text-white/90">
                  전체 평균 대출 이율
                </p>
                <p className="mt-1 text-5xl font-extrabold tracking-tight sm:text-6xl">
                  <span className="mr-1.5 text-3xl sm:text-4xl">약</span>5.5%
                </p>
              </div>
              <p className="text-[13px] leading-relaxed text-white/90 sm:ml-auto sm:max-w-xs sm:text-right sm:text-sm lg:max-w-md">
                ※ 대출 유형과 금융기관에 따라 금리는 차이가 있을 수 있습니다.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <SubTitle hint="연 금리">금융기관별 평균 금리</SubTitle>
                <RateTiles items={INSTITUTION_RATES} className="lg:grid-cols-4" />
              </div>
              <div>
                <SubTitle hint="연 금리">대출 유형별 평균 금리</SubTitle>
                <RateTiles items={LOAN_TYPE_RATES} className="lg:grid-cols-3" />
              </div>
            </div>

            <Source>
              출처: 정부 부처 자료, 한국은행 금리 통계, 하나증권 등(2025년 기준)
            </Source>
          </Panel>

          <Panel no={3} title="정책자금 대출 현황" period="2025년 계획 및 실적">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <InnerCard variant="hero" className="flex flex-col justify-center">
                <CardLabel icon={LuHandCoins} inverted>
                  2025년 정책자금 공급 계획
                </CardLabel>
                <p className="mt-5 text-3xl font-extrabold sm:text-4xl xl:text-3xl">
                  3조 7,700억 원
                </p>
                <p className="mt-2 text-[13px] text-white/85 sm:text-sm">
                  (중소벤처기업부, 2024년 12월 26일 발표)
                </p>
              </InnerCard>

              <InnerCard>
                <CardLabel icon={LuLayers}>자금 종류별 공급 계획</CardLabel>
                <ShareBars items={FUND_PLAN} />
                <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-azure-200 pt-3 text-azure-950">
                  <span className="font-bold">합계</span>
                  <span className="whitespace-nowrap font-extrabold tabular-nums">
                    3조 7,700억 원
                  </span>
                </div>
              </InnerCard>

              <InnerCard className="flex flex-col justify-center">
                <CardLabel icon={LuCircleCheck}>
                  2025년 실제 지원 실적{" "}
                  <span className="whitespace-nowrap font-medium text-azure-600">
                    (정부 발표)
                  </span>
                </CardLabel>
                <p className="mt-4 text-3xl font-extrabold text-azure-950">
                  <span className="mr-1 text-xl">약</span>4조 2,000억 원
                </p>
                <p className="mt-2 text-[13px] text-azure-600 sm:text-sm">
                  (금융취약 소상공인 대상 정책자금 공급)
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-azure-200 pt-5">
                  <IconBadge
                    icon={LuStore}
                    size={20}
                    boxClassName="h-10 w-10"
                    className="bg-white text-azure-600 shadow-sm"
                  />
                  <div>
                    <p className="text-2xl font-extrabold text-azure-950">
                      <span className="mr-1 text-lg">약</span>12만 개사
                    </p>
                    <p className="text-[13px] text-azure-600 sm:text-sm">
                      (정책자금 지원 업체 수)
                    </p>
                  </div>
                </div>
              </InnerCard>

              <div className="rounded-2xl bg-azure-900 p-5 text-white shadow-[0_16px_32px_-16px_rgba(20,42,60,0.7)] sm:p-6">
                <p className="flex items-center gap-2.5 text-base font-extrabold sm:text-lg">
                  <span aria-hidden className="h-5 w-1 rounded-full bg-accent-500" />
                  꼭 확인하세요!
                </p>
                <ol className="mt-4 divide-y divide-white/15 border-t border-white/15 text-sm leading-relaxed text-white/80">
                  {FUND_CAUTIONS.map((item, i) => (
                    <li key={item.lead} className="flex gap-3 py-3 last:pb-0">
                      <span className="mt-px text-xs font-extrabold tabular-nums text-azure-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p>
                        <strong className="font-bold text-white">{item.lead}</strong>
                        {item.rest}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <Source>
              출처: 중소벤처기업부 보도자료, 정부 국정과제 추진 실적 자료(2025년)
            </Source>
          </Panel>

          <Panel no={4} title="한눈에 보는 핵심 포인트">
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {KEY_POINTS.map((point) => (
                <li
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-azure-100 bg-linear-to-b from-azure-50 to-white p-5 sm:gap-5 xl:flex-col xl:gap-4 xl:p-6"
                >
                  <IconBadge
                    icon={point.icon}
                    size={24}
                    boxClassName="h-12 w-12 sm:h-14 sm:w-14"
                    className="bg-linear-to-br from-azure-500 to-azure-700 text-white shadow-[0_8px_16px_-8px_rgba(36,77,108,0.6)]"
                  />
                  <div>
                    <p className="text-sm font-bold text-azure-700 sm:text-[15px]">{point.title}</p>
                    <p className="mt-1.5 text-2xl font-extrabold leading-tight text-azure-950">
                      {point.value.map((part, i) => (
                        <Fragment key={part}>
                          {i > 0 && " "}
                          <span className="whitespace-nowrap">
                            {part}
                            {i < point.value.length - 1 && ","}
                          </span>
                        </Fragment>
                      ))}
                    </p>
                    <p className="mt-1 text-sm text-azure-600">{point.meta}</p>
                    <p className="mt-2 text-[13px] leading-snug text-azure-600">{point.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-2xl bg-azure-600 px-5 py-6 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <IconBadge
              icon={LuLightbulb}
              size={22}
              boxClassName="h-10 w-10 sm:h-12 sm:w-12"
              className="bg-white/15 text-white"
            />
            <div className="xl:flex xl:items-center xl:gap-4">
              <p className="text-lg font-bold">
                연우는 소상공인의 든든한 자금 파트너입니다.
              </p>
              <span aria-hidden className="hidden h-5 w-px bg-white/40 xl:block" />
              <p className="mt-1 text-sm text-white/85 sm:text-base xl:mt-0">
                대출과 정책자금, 내 사업에 맞는 최적의 금융 솔루션을 함께
                찾아드립니다.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-azure-700 transition-colors hover:bg-azure-50 sm:text-base lg:self-auto"
          >
            상담 문의하기 →
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-1 text-xs leading-relaxed text-azure-600 lg:flex-row lg:gap-3">
          <p>
            ※ 본 자료는 2025년 기준 주요 정부·공공기관 자료를 바탕으로
            작성되었으며, 실제 수치는 변경될 수 있습니다.
          </p>
          <span aria-hidden className="hidden lg:block">
            |
          </span>
          <p>출처: 중소벤처기업부, 국회예산정책처, 한국은행, 하나증권 등</p>
        </div>
      </div>
    </section>
  );
}

function Panel({
  no,
  title,
  period,
  children,
}: {
  no: number;
  title: string;
  period?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`flex flex-col rounded-3xl border border-azure-100/70 bg-white p-5 sm:p-8 ${CARD_SHADOW}`}
    >
      <header className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-azure-100 pb-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-azure-500 to-azure-700 text-sm font-extrabold text-white shadow-[0_6px_14px_-6px_rgba(36,77,108,0.6)]">
          {String(no).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-extrabold text-azure-950 sm:text-2xl">{title}</h3>
        {period && (
          <span className="rounded-full bg-azure-50 px-3 py-1 text-xs font-semibold text-azure-700 ring-1 ring-azure-100 sm:text-sm">
            {period}
          </span>
        )}
      </header>
      <div className="mt-6 flex flex-1 flex-col">{children}</div>
    </article>
  );
}

function InnerCard({
  children,
  className = "",
  variant = "plain",
}: {
  children: ReactNode;
  className?: string;
  /** hero: 패널의 대표 수치를 진한 배경으로 강조 */
  variant?: "plain" | "hero";
}) {
  const tone =
    variant === "hero"
      ? "bg-linear-to-br from-azure-600 to-azure-800 text-white shadow-[0_16px_32px_-16px_rgba(36,77,108,0.7)]"
      : "border border-azure-100 bg-azure-50/70";

  return <div className={`rounded-2xl p-5 sm:p-6 ${tone} ${className}`}>{children}</div>;
}

function CardLabel({
  icon,
  inverted = false,
  children,
}: {
  icon: IconType;
  inverted?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <IconBadge
        icon={icon}
        size={20}
        boxClassName="h-10 w-10"
        className={inverted ? "bg-white/15 text-white" : "bg-white text-azure-600 shadow-sm"}
      />
      <p
        className={`text-[15px] font-bold leading-snug sm:text-base ${
          inverted ? "text-white" : "text-azure-950"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function SubTitle({ hint, children }: { hint?: string; children: ReactNode }) {
  return (
    <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-azure-950 sm:text-lg">
      <span aria-hidden className="h-4 w-1 rounded-full bg-azure-500" />
      {children}
      {hint && <span className="text-sm font-medium text-azure-600">({hint})</span>}
    </h4>
  );
}

function RateTiles({ items, className }: { items: Rate[]; className: string }) {
  return (
    <ul className={`grid grid-cols-2 gap-3 sm:gap-4 ${className}`}>
      {items.map((item) => (
        <li
          key={item.label}
          className={`relative rounded-2xl p-4 sm:p-5 ${
            item.lowest
              ? "col-span-2 bg-linear-to-br from-azure-600 to-azure-800 text-white shadow-[0_16px_32px_-16px_rgba(36,77,108,0.7)] sm:col-span-1"
              : "border border-azure-100 bg-azure-50/70"
          }`}
        >
          {item.lowest && (
            <span className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-bold ring-1 ring-white/30 sm:right-5 sm:top-5">
              가장 낮은 금리
            </span>
          )}
          <div
            className={`flex flex-col items-start gap-2 sm:flex-row sm:items-center ${
              item.lowest ? "text-white" : "text-azure-800"
            }`}
          >
            {item.icon && (
              <IconBadge
                icon={item.icon}
                size={16}
                boxClassName="h-8 w-8"
                className={item.lowest ? "bg-white/15 text-white" : "bg-white text-azure-600 shadow-sm"}
              />
            )}
            <p className="text-[15px] font-bold leading-snug">
              {item.label}
              {item.sub && (
                <span className="block text-[13px] font-semibold xl:inline xl:text-[15px] xl:font-bold">
                  {item.sub}
                </span>
              )}
            </p>
          </div>
          <p
            className={`mt-2 whitespace-nowrap text-lg font-extrabold tabular-nums tracking-tight min-[400px]:text-xl sm:text-2xl ${
              item.lowest ? "text-white" : "text-azure-950"
            }`}
          >
            {item.rate}
          </p>
          <p
            className={`mt-2 text-[13px] leading-snug ${
              item.lowest ? "text-white/85" : "text-azure-600"
            }`}
          >
            {item.note}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Source({ children }: { children: ReactNode }) {
  return <p className="mt-auto pt-6 text-xs leading-relaxed text-azure-600">{children}</p>;
}
