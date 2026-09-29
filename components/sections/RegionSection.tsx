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
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
          <div
            className={`grid overflow-hidden rounded-2xl border border-azure-100 bg-white sm:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr] ${CARD_SHADOW}`}
          >
            <div className="relative min-h-[280px] sm:min-h-0">
              <Image
                src="/images/person.jpg"
                alt="환하게 웃으며 파이팅하는 소상공인 사장님 두 분"
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 640px) 260px, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>

            <div className="flex flex-col justify-center px-6 pb-8 pt-6 sm:px-8 sm:py-10 xl:pr-10">
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

              <div className="mt-7 flex flex-wrap gap-2.5">
                {REGIONS.map((region) => (
                  <div
                    key={region.ko}
                    className="flex items-center gap-2 rounded-xl border border-azure-100 bg-azure-50 px-3 py-2.5"
                  >
                    <LuMapPin className="text-accent-600" size={18} />
                    <p className="font-bold text-azure-900">{region.ko}</p>
                    <p className="hidden text-xs tracking-wide text-azure-500 sm:block">
                      {region.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center rounded-2xl border border-azure-100 bg-white p-8 sm:p-10 md:flex-row md:items-center md:justify-between xl:flex-col xl:items-stretch xl:justify-center ${CARD_SHADOW}`}
          >
            <div className="flex items-start gap-5">
              <IconBadge
                icon={LuShieldCheck}
                size={30}
                boxClassName="h-16 w-16"
                className="bg-azure-600 text-white"
              />
              <div>
                <p className="text-sm font-semibold text-accent-600">
                  연우가 중요하게 생각하는 것
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-snug text-azure-950">
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
            <p className="mt-6 -rotate-2 self-end text-sm font-semibold text-accent-600 md:mt-0 md:self-center xl:mt-6 xl:self-end">
              사장님의 든든한 동반자가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
