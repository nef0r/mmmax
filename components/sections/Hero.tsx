"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Premium animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-black to-black" />
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Interactive mouse gradient */}
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14,165,233,0.25), transparent 60%)`,
        }}
      />
      
      {/* Optimized animated gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.10),transparent_50%)]" />

      {/* Optimized grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />

      {/* Optimized floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float-slow will-change-transform" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float-slow will-change-transform" style={{ animationDelay: "2s" }} />

      {/* Optimized background image overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%230ea5e9' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      {/* Decorative smart home elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-10 blur-2xl pointer-events-none">
        <div className="text-8xl">🏠</div>
      </div>
      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-10 blur-xl pointer-events-none">
        <div className="text-6xl">💡</div>
      </div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-10 blur-xl pointer-events-none">
        <div className="text-5xl">🔒</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-5 py-2.5 rounded-full glass-effect border border-primary-500/30 mb-8 group hover:border-primary-500/50 transition-all duration-300">
          <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow" />
          <span className="text-sm text-primary-300 font-medium tracking-wide">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight px-4">
          <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
            {t("hero.title1")}
          </span>
          <span className="block mt-1 md:mt-2 bg-gradient-to-r from-primary-300 via-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("hero.title2")}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => scrollToSection("configurator")}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-xl hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 text-lg font-semibold transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">{t("hero.button1")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="px-8 py-4 border-2 border-gray-600/50 rounded-xl hover:border-primary-500/70 hover:bg-primary-500/5 transition-all duration-300 text-lg font-semibold backdrop-blur-sm"
          >
            {t("hero.button2")}
          </button>
        </div>

        {/* Premium Stats */}
        <div className="mt-12 md:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: "0.8s" }}>
          <div className="group relative p-6 md:p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 rounded-2xl transition-all duration-300" />
            <div className="relative">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">{t("hero.stats1")}</div>
            </div>
          </div>
          <div className="group relative p-6 md:p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 rounded-2xl transition-all duration-300" />
            <div className="relative">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">{t("hero.stats2")}</div>
            </div>
          </div>
          <div className="group relative p-6 md:p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 rounded-2xl transition-all duration-300" />
            <div className="relative">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">{t("hero.stats3")}</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

