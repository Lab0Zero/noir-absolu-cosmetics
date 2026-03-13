import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ProductShowcase from "@/components/sections/ProductShowcase";
import EditorialDuo from "@/components/sections/EditorialDuo";
import RitualCarousel from "@/components/sections/RitualCarousel";
import Ingredients from "@/components/sections/Ingredients";
import Testimonials from "@/components/sections/Testimonials";
import CTAFinal from "@/components/sections/CTAFinal";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <Marquee />
      <ProductShowcase />
      <EditorialDuo />
      <RitualCarousel />
      <Ingredients />
      <Testimonials />
      <CTAFinal />
    </SmoothScroll>
  );
}
