import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Methodology from "@/components/sections/Methodology";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center relative">
      <Hero />
      <About />
      <Methodology />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
}
