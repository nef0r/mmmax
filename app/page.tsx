import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Cases from "@/components/sections/Cases";
import Configurator from "@/components/sections/Configurator";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Cases />
      <Configurator />
      <Contact />
    </main>
  );
}


