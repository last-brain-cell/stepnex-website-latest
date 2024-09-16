import RolesSection from "@/components/RolesSection";
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {HeroSectionForCareers} from "@/components/HeroSectionForCareers";
import {HeaderForCareers} from "@/components/HeaderForCareers";
import RolesHeading from "@/components/RolesHeading";

export default function CareersPage () {
    return (
        <div>
            <HeaderForCareers/>
            <HeroSectionForCareers/>
            <RolesSection/>
        </div>
    )
}
