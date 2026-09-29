"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "어떤 분들이 상담할 수 있나요?",
    a: "상주 · 문경 · 예천 지역에서 사업을 운영하는 소상공인을 중심으로 상담합니다.",
  },
  {
    q: "모든 사업자가 자금을 받을 수 있나요?",
    a: "사업별 조건이 다르기 때문에 사업 현황 확인 후 안내드립니다.",
  },
  {
    q: "어떤 자금이 있는지 몰라도 상담할 수 있나요?",
    a: "네. 현재 사업 상황을 확인한 뒤 검토 가능한 자금을 함께 확인합니다.",
  },
  {
    q: "상담은 어떻게 신청하나요?",
    a: "홈페이지 상담 신청서를 작성하면 확인 후 연락드립니다.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-azure-50">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <h2 className="text-center text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
          자주 묻는 질문
        </h2>

        <div className="mt-12 divide-y divide-(--color-line) overflow-hidden rounded-2xl border border-(--color-line) bg-white">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-azure-900">
                    <span className="mr-2 text-accent-600">Q.</span>
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-azure-400 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-azure-600">
                    <span className="mr-2 font-bold text-azure-400">A.</span>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
