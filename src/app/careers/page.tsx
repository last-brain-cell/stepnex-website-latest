import RolesSection from "@/components/RolesSection";
import { HeroSectionForCareers } from "@/components/HeroSectionForCareers";
import { HeaderForCareers } from "@/components/HeaderForCareers";

export default function CareersPage() {
  return (
    <div>
      <HeaderForCareers />
      <HeroSectionForCareers />
      <RolesSection />
    </div>
  );
}
