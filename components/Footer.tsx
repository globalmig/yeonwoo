import LegalModal from "@/components/LegalModal";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-azure-50 text-azure-600">
      <div className="mx-auto max-w-360 px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="font-serif text-xl font-bold text-azure-900">연우</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              상주 · 문경 · 예천 소상공인을 위한 사업 자금 상담.
              <br />
              인연으로 만나, 믿음으로 함께합니다.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <LegalModal doc="privacy" className="font-bold hover:text-azure-900">
              개인정보처리방침
            </LegalModal>
            <LegalModal doc="terms" className="hover:text-azure-900">
              이용약관
            </LegalModal>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-azure-100 pt-6 text-xs text-azure-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 연우. All rights reserved.</p>
          <p>본 사이트의 자금 안내는 참고용이며, 실제 지원 여부는 상담 및 심사를 통해 결정됩니다.</p>
        </div>
      </div>
    </footer>
  );
}
