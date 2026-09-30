"use client";

import { useState, type FormEvent } from "react";
import { LuMapPin, LuUser } from "react-icons/lu";
import LegalModal from "@/components/LegalModal";

const REGIONS = ["상주", "문경", "예천", "기타"];

export default function ContactSection() {
  const [region, setRegion] = useState("상주");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-linear-to-b from-white via-white via-55% to-azure-50"
    >
      <div className="mx-auto grid max-w-360 gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-lg font-bold text-accent-600">
            지금 바로, 연우와 상담해보세요.
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-snug text-azure-950 sm:text-4xl">
            내 사업도 확인해볼까요?
          </h2>
          <p className="mt-6 leading-relaxed text-azure-700">
            간단한 정보만 남겨주시면, 연우가 빠르게 연락드리겠습니다.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-azure-800">
            <div className="flex items-center gap-2 font-medium">
              <LuMapPin className="text-accent-600" size={22} />
              상주 · 문경 · 예천
            </div>
            <span className="hidden h-5 w-px bg-azure-200 sm:block" aria-hidden />
            <div className="flex items-center gap-2 font-medium">
              <LuUser className="text-accent-600" size={22} />
              소상공인 전용 상담
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-azure-100 bg-white p-5 shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)] sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <p className="text-lg font-bold text-azure-900">
                상담 신청이 접수되었습니다.
              </p>
              <p className="text-sm text-azure-500">
                확인 후 빠르게 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-azure-800">
                  이름
                </label>
                <input
                  type="text"
                  required
                  placeholder="이름을 입력해주세요"
                  className="w-full rounded-lg border border-azure-200 px-4 py-3 text-sm text-azure-900 outline-none placeholder:text-azure-300 focus:border-azure-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-azure-800">
                  연락처
                </label>
                <input
                  type="tel"
                  required
                  placeholder="연락처를 입력해주세요"
                  className="w-full rounded-lg border border-azure-200 px-4 py-3 text-sm text-azure-900 outline-none placeholder:text-azure-300 focus:border-azure-500"
                />
              </div>

              <div>
                <label
                  htmlFor="call-time"
                  className="mb-1.5 block text-sm font-medium text-azure-800"
                >
                  통화 가능 시간
                </label>
                <input
                  id="call-time"
                  type="text"
                  required
                  placeholder="예: 평일 오후 2시 이후"
                  className="w-full rounded-lg border border-azure-200 px-4 py-3 text-sm text-azure-900 outline-none placeholder:text-azure-300 focus:border-azure-500"
                />
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-medium text-azure-800">
                  사업 지역
                </span>
                <div className="grid grid-cols-4 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRegion(r)}
                      className={`rounded-full border px-2 py-2 text-sm font-medium transition-colors sm:px-4 ${
                        region === r
                          ? "border-azure-600 bg-azure-600 text-white"
                          : "border-azure-200 text-azure-600 hover:border-azure-400"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-azure-800">
                  업종
                </label>
                <input
                  type="text"
                  required
                  placeholder="업종을 입력해주세요"
                  className="w-full rounded-lg border border-azure-200 px-4 py-3 text-sm text-azure-900 outline-none placeholder:text-azure-300 focus:border-azure-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-azure-800">
                  상담 내용
                </label>
                <textarea
                  rows={3}
                  placeholder="상담받고 싶은 내용을 입력해주세요"
                  className="w-full resize-none rounded-lg border border-azure-200 px-4 py-3 text-sm text-azure-900 outline-none placeholder:text-azure-300 focus:border-azure-500"
                />
              </div>

              {/* Checkbox pinned to the first line; the link drops under the label when space runs out */}
              <div className="flex items-start gap-2.5 text-sm">
                <input
                  id="privacy-agree"
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-azure-600"
                />
                <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <label htmlFor="privacy-agree" className="text-azure-700">
                    개인정보 수집·이용 동의{" "}
                    <span className="font-semibold text-accent-600">(필수)</span>
                  </label>
                  <LegalModal
                    doc="privacy"
                    onConfirm={() => setAgreed(true)}
                    className="shrink-0 text-xs text-azure-500 underline underline-offset-2 hover:text-azure-800"
                  >
                    내용 보기
                  </LegalModal>
                </div>
              </div>

              <button
                type="submit"
                className="mt-1 rounded-full bg-azure-600 py-3.5 text-base font-semibold text-white transition-colors hover:bg-azure-700 sm:mt-2"
              >
                상담 신청하기
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
