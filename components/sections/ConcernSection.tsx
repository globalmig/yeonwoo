import { LuFileQuestion, LuUserSearch, LuFileX2, LuFileText } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";

const CONCERNS = [
  { icon: LuFileQuestion, text: "어떤 자금을 신청해야 할지 모르겠습니다." },
  { icon: LuUserSearch, text: "내 사업도 신청할 수 있는지 궁금합니다." },
  { icon: LuFileX2, text: "전에 신청했다가 어려움을 겪은 적이 있습니다." },
  { icon: LuFileText, text: "필요한 서류를 어떻게 준비해야 할지 막막합니다." },
];

export default function ConcernSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
            혹시 이런 고민이
            <br />
            있으신가요?
          </h2>
          <p className="mt-4 text-azure-600">
            연우는 상주 · 문경 · 예천 사장님들의 다양한 고민에 귀 기울입니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CONCERNS.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 rounded-2xl border border-(--color-line) bg-azure-50 px-5 py-6 sm:gap-6 sm:px-7 sm:py-7"
            >
              <IconBadge
                icon={item.icon}
                size={40}
                boxClassName="h-14 w-14 sm:h-20 sm:w-20"
                iconClassName="size-7 sm:size-10"
                className="bg-white text-azure-600"
              />
              <p className="text-base font-medium leading-relaxed text-azure-800 sm:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
