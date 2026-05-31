import { CallToAction } from "@/components/CallToAction";
import { Directors } from "@/components/Directors";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";
import PrimaryFeatures from "@/components/PrimaryFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Directors />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
