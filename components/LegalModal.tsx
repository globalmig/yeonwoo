"use client";

import { useRef, type ReactNode } from "react";
import { LuX } from "react-icons/lu";
import { EFFECTIVE_DATE, LEGAL_DOCS, type LegalDocId } from "@/lib/legal";

interface LegalModalProps {
  doc: LegalDocId;
  className?: string;
  children: ReactNode;
}

export default function LegalModal({ doc, className = "", children }: LegalModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { title, intro, sections } = LEGAL_DOCS[doc];

  function open() {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button type="button" onClick={open} className={className}>
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={`legal-${doc}-title`}
        onClose={() => (document.body.style.overflow = "")}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[85vh] w-[calc(100%-2.5rem)] max-w-2xl overflow-hidden rounded-2xl bg-white p-0 text-left shadow-2xl backdrop:bg-azure-950/50 open:flex open:flex-col"
      >
        <div className="flex items-center justify-between border-b border-azure-100 px-6 py-5 sm:px-8">
          <h2
            id={`legal-${doc}-title`}
            className="text-xl font-extrabold text-azure-950"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="rounded-full p-1.5 text-azure-500 transition-colors hover:bg-azure-50 hover:text-azure-900"
          >
            <LuX size={22} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-azure-700 sm:px-8">
          <p>{intro}</p>
          {sections.map((section) => (
            <section key={section.heading} className="mt-6">
              <h3 className="font-bold text-azure-900">{section.heading}</h3>
              {section.body.map((line) => (
                <p key={line} className="mt-1.5">
                  {line}
                </p>
              ))}
            </section>
          ))}
          <p className="mt-8 text-xs text-azure-400">시행일자: {EFFECTIVE_DATE}</p>
        </div>

        <div className="border-t border-azure-100 px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={close}
            className="w-full rounded-full bg-azure-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-azure-700"
          >
            확인
          </button>
        </div>
      </dialog>
    </>
  );
}
