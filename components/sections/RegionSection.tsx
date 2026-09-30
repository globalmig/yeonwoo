import Image from "next/image";
import { LuMapPin, LuShieldCheck } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";

const REGIONS = [
  { ko: "상주", en: "SANGJU" },
  { ko: "문경", en: "MUNGYEONG" },
  { ko: "예천", en: "YECHEON" },
];

const CARD_SHADOW = "shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)]";

export default function RegionSection() {
  return (
    <section id="region">
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
          <div
            className={`grid overflow-hidden rounded-2xl border border-azure-100 bg-white sm:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr] ${CARD_SHADOW}`}
          >
            <div className="relative min-h-80 sm:min-h-0">
              <Image
                src="/images/person2.png"
                alt="태블릿으로 자료를 보여주며 사장님과 상담하는 상담사"
                fill
                sizes="(min-width: 1280px) 400px, (min-width: 640px) 340px, 100vw"
                className="object-cover object-[60%_30%]"
              />
            </div>

            <div className="flex flex-col justify-center px-5 pb-8 pt-6 sm:px-8 sm:py-10 xl:pr-10">
              <p className="text-base font-bold text-accent-600">
                사장님마다 상황이 다르니까요.
              </p>
              <h2 className="mt-3 text-xl font-extrabold leading-snug text-azure-950 sm:text-2xl min-[1400px]:text-3xl">
                같은 업종이라도
                <br className="hidden sm:block" />{" "}
                업력과 매출, 기존 대출, 신용상황 등에 따라 알아볼 수 있는 자금이
                달라질 수 있습니다.
              </h2>
              <p className="mt-5 leading-relaxed text-azure-700">
                연우는 먼저 사장님의 상황을 확인합니다.
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2.5">
                {REGIONS.map((region) => (
                  <div
                    key={region.ko}
                    className="flex items-center gap-1 rounded-lg border border-azure-100 bg-azure-50 px-2.5 py-1.5 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5"
                  >
                    <LuMapPin className="size-3.5 text-accent-600 sm:size-4.5" size={18} />
                    <p className="text-sm font-bold text-azure-900 sm:text-base">{region.ko}</p>
                    <p className="hidden text-xs tracking-wide text-azure-500 sm:block">
                      {region.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center rounded-2xl border border-azure-100 bg-white px-5 py-8 sm:p-10 md:flex-row md:items-center md:justify-between xl:flex-col xl:items-stretch xl:justify-center ${CARD_SHADOW}`}
          >
            <div>
              <div className="flex items-center gap-3">
                <IconBadge
                  icon={LuShieldCheck}
                  size={22}
                  boxClassName="h-10 w-10 sm:h-12 sm:w-12"
                  className="bg-azure-600 text-white"
                />
                <p className="text-sm font-semibold text-accent-600">
                  연우가 중요하게 생각하는 것
                </p>
              </div>
              <div>
                <h3 className="mt-5 text-xl font-extrabold leading-snug text-azure-950 min-[360px]:text-2xl sm:mt-4">
                  무조건 가능하다고
                  <br />
                  말씀드리지 않습니다.
                </h3>
                <p className="mt-3 leading-relaxed text-azure-700">
                  가능한 부분과 어려운 부분을 먼저{" "}
                  <br className="hidden sm:block" />
                  정확하게 말씀드리겠습니다.
                </p>
              </div>
            </div>
            <div className="relative mt-8 aspect-2159/300 w-full max-w-56 -rotate-2 self-end overflow-hidden sm:mt-6 sm:max-w-72 md:mt-0 md:self-center xl:mt-6 xl:self-end">
              <Image
                src="/typo-partner.png"
                alt="사장님의 든든한 동반자가 되겠습니다."
                fill
                sizes="288px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
