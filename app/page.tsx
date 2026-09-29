import Hero from "@/components/sections/Hero";
import ConcernSection from "@/components/sections/ConcernSection";
import FlowBackdrop from "@/components/sections/FlowBackdrop";
import DataSection from "@/components/sections/DataSection";
import KeyMessageSection from "@/components/sections/KeyMessageSection";
import RegionSection from "@/components/sections/RegionSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BrandSection from "@/components/sections/BrandSection";
import ReviewSection from "@/components/sections/ReviewSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import {
  SHOW_FAQ_SECTION,
  SHOW_REVIEW_SECTION,
  SHOW_SERVICE_SECTION,
} from "@/lib/site-flags";

export default function Home() {
  return (
    <>
      <Hero />
      <ConcernSection />
      <FlowBackdrop>
        <DataSection />
        <KeyMessageSection />
        <RegionSection />
        {SHOW_SERVICE_SECTION && <ServiceSection />}
        <ProcessSection />
      </FlowBackdrop>
      <BrandSection />
      {SHOW_REVIEW_SECTION && <ReviewSection />}
      {SHOW_FAQ_SECTION && <FAQSection />}
      <ContactSection />
    </>
  );
}
