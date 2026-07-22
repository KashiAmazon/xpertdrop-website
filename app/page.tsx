import Hero from "@/components/sections/hero";
import TrustedPlatforms from "@/components/sections/trusted-platforms";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Process from "@/components/sections/process";
import SuccessStories from "@/components/sections/success-stories";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPlatforms />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <SuccessStories />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
