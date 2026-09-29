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
      <div className="mx-auto max-w-360 px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid items-center gap-8 sm:gap-10 sm:rounded-3xl sm:border sm:border-azure-100/70 sm:bg-white/60 sm:p-12 lg:grid-cols-[1fr_2.2fr] lg:gap-12">
          <div>
            <h2 className="text-2xl font-extrabold leading-snug text-azure-950 min-[360px]:text-3xl sm:text-4xl">
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

          <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {CHECKPOINTS.map((item, i) => (
              <li
                key={item.title}
                className={`relative flex items-center gap-4 rounded-2xl border border-azure-100/70 bg-white/95 px-5 py-4 sm:flex-col sm:gap-0 sm:px-4 sm:pb-8 sm:pt-10 sm:text-center ${CARD_SHADOW}`}
              >
                <span className="absolute left-3 top-3 hidden h-7 w-7 sm:flex items-center justify-center rounded-full bg-azure-950 text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconBadge
                  icon={item.icon}
                  size={34}
                  boxClassName="h-12 w-12 sm:h-16 sm:w-16"
                  iconClassName="size-6 sm:size-7"
                  className="bg-azure-100/70 text-azure-600"
                />
                <div>
                  <p className="text-base font-bold text-azure-950 sm:mt-5 sm:text-lg">
                    <span className="mr-1.5 text-sm text-azure-400 sm:hidden">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-azure-600 sm:mt-2">
                    {item.caption}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
