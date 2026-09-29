import ProcessTimeline from "@/components/sections/ProcessTimeline";

export default function ProcessSection() {
  return (
    <section id="process">
      <div className="mx-auto max-w-360 px-5 pb-32 pt-24 sm:px-8 sm:pb-48 sm:pt-32 md:grid md:grid-cols-[1fr_1.15fr] md:items-center md:gap-10 lg:block">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-sm font-semibold tracking-wide text-azure-600">
            상담 진행 절차
            <span className="h-px w-10 bg-azure-300" />
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-azure-950 min-[360px]:text-4xl sm:text-5xl md:text-4xl lg:text-5xl">
            복잡한 과정은 줄이고,
            <br />
            <span className="text-azure-600">필요한 내용만</span> 안내합니다.
          </h2>
          <p className="mt-6 leading-relaxed text-azure-700">
            불필요한 절차는 덜어내고, 꼭 필요한 정보만을 바탕으로{" "}
            <br className="hidden sm:block md:hidden lg:block" />
            빠르고 정확하게 안내해드립니다.
          </p>
        </div>

        <ProcessTimeline />
      </div>
    </section>
  );
}
