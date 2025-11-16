"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Link
              href="/"
              className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="w-5 h-5 md:w-7 md:h-7 text-white relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary-300 via-primary-400 to-primary-600 bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity"
            >
              Умный Макс
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass-effect border border-white/10 hover:border-primary-500/50 transition-all duration-300 text-sm font-medium"
            >
              <span>{language === "ru" ? "🇷🇺" : "🇰🇿"}</span>
              <span className="hidden sm:inline">{language === "ru" ? "РУС" : "ҚАЗ"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isLanguageMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLanguageMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLanguageMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 rounded-xl glass-effect border border-white/10 shadow-2xl z-50 overflow-hidden">
                  <button
                    onClick={() => {
                      setLanguage("ru");
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-3 ${
                      language === "ru" ? "bg-primary-500/20 text-primary-300" : "text-gray-300"
                    }`}
                  >
                    <span className="text-lg">🇷🇺</span>
                    <span className="font-medium">Русский</span>
                    {language === "ru" && (
                      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("kz");
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-3 ${
                      language === "kz" ? "bg-primary-500/20 text-primary-300" : "text-gray-300"
                    }`}
                  >
                    <span className="text-lg">🇰🇿</span>
                    <span className="font-medium">Қазақша</span>
                    {language === "kz" && (
                      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {pathname === "/" && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{t("nav.features")}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection("cases")}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{t("nav.cases")}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection("configurator")}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{t("nav.configurator")}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300" />
                </button>
              </>
            )}
            <Link
              href="/catalog"
              className={`relative px-4 py-2 transition-all duration-300 group ${
                pathname === "/catalog"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">{t("nav.catalog")}</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ${
                pathname === "/catalog" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <Link
              href="/about"
              className={`relative px-4 py-2 transition-all duration-300 group ${
                pathname === "/about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">{t("nav.about")}</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ${
                pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-lg hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 font-semibold text-sm md:text-base overflow-hidden group"
            >
              <span className="relative z-10">{t("nav.contact")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
