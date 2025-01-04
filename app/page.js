import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Butterflies } from "@/components/effects/butterflies";
import { ParallaxImages } from "@/components/effects/parallax-images";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Butterflies />
      <ParallaxImages />
      <Navbar />
      <HeroSection />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
