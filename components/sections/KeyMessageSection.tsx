import { LuStore, LuDatabase, LuFileSearch, LuClipboardCheck } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";

const CHECKPOINTS = [
  { icon: LuStore, title: "사업자 상황", caption: "업종 · 업력 · 사업장" },
  { icon: LuDatabase, title: "매출 및 금융상황", caption: "매출 · 기존 대출 · 신용" },
  { icon: LuFileSearch, title: "정책자금 확인", caption: "현재 검토 가능한 자금" },
  { icon: LuClipboardCheck, title: "준비사항 안내", caption: "필요 서류 · 신청 절차" },
];

const CARD_SHADOW = "shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)]";

export default function KeyMessageSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid items-center gap-10 rounded-3xl border border-azure-100/70 bg-white/60 p-8 sm:p-12 lg:grid-cols-[1fr_2.2fr] lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
              중요한 건
              <br />
              <span className="text-azure-600">‘정책자금이 있느냐’</span>가
              아닙니다.
            </h2>
            <p className="mt-6 leading-relaxed text-azure-700">
              내 사업에 어떤 자금을 알아볼 수 있느냐입니다.
              <br />
              연우는 이것부터 확인합니다.
            </p>
          </div>

          <ol className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {CHECKPOINTS.map((item, i) => (
              <li
                key={item.title}
                className={`relative flex flex-col items-center rounded-2xl border border-azure-100/70 bg-white/95 px-4 pb-8 pt-10 text-center ${CARD_SHADOW}`}
              >
                <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-azure-950 text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconBadge
                  icon={item.icon}
                  size={34}
                  boxClassName="h-18 w-18"
                  className="bg-azure-100/70 text-azure-600"
                />
                <p className="mt-5 text-lg font-bold text-azure-950">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-azure-600">({item.caption})</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
