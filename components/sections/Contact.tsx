"use client";

import { useState } from "react";
import { useConfigurator } from "@/contexts/ConfiguratorContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { selectedTariff, selectedDevices, zonesCount, selectedPremise } = useConfigurator();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const premiseNames: Record<string, string> = {
        apartment: "Квартира",
        house: "Дом",
        office: "Офис",
      };

      const tariffNames: Record<string, string> = {
        economy: "Эконом",
        standard: "Стандарт",
        premium: "Премиум",
      };

      const deviceNames: Record<string, string> = {
        "smart-lighting": "Умное освещение",
        "electric-gates": "Электрические ворота",
        "electric-curtains": "Электрический карниз",
        "climate-control": "Климат-контроль",
        "security-system": "Система безопасности",
        "video-surveillance": "Видеонаблюдение",
        "smart-locks": "Умные замки",
        "smart-sockets": "Умные розетки",
        "smart-switches": "Умные выключатели",
        "smart-sensors": "Умные датчики",
        "smart-speakers": "Умные колонки",
        "smart-tv": "Умный телевизор",
        "irrigation-system": "Система полива",
        "smart-appliances": "Умная бытовая техника",
        "smart-thermostat": "Умный термостат",
        "smart-blinds": "Умные жалюзи",
        "smart-doorbell": "Умный видеодомофон",
        "smart-smoke-detector": "Умный датчик дыма",
      };

      // Calculate total price (simplified - should match configurator logic)
      const calculateTotalPrice = () => {
        if (!selectedTariff || !selectedPremise) return 0;
        
        const tariffPrices: Record<string, { base: number; perZone: number }> = {
          economy: { base: 99500, perZone: 25000 },
          standard: { base: 199500, perZone: 40000 },
          premium: { base: 399500, perZone: 60000 },
        };
        
        const premiseMultipliers: Record<string, number> = {
          apartment: 1.0,
          house: 1.3,
          office: 1.2,
        };
        
        const devicePrices: Record<string, number> = {
          "smart-lighting": 75000,
          "electric-gates": 225000,
          "electric-curtains": 90000,
          "climate-control": 175000,
          "security-system": 200000,
          "video-surveillance": 125000,
          "smart-locks": 110000,
          "smart-sockets": 40000,
          "smart-switches": 60000,
          "smart-sensors": 50000,
          "smart-speakers": 75000,
          "smart-tv": 250000,
          "irrigation-system": 150000,
          "smart-appliances": 300000,
          "smart-thermostat": 100000,
          "smart-blinds": 80000,
          "smart-doorbell": 90000,
          "smart-smoke-detector": 60000,
        };
        
        const tariff = tariffPrices[selectedTariff];
        const multiplier = premiseMultipliers[selectedPremise];
        if (!tariff || !multiplier) return 0;
        
        const basePrice = tariff.base;
        const zonesPrice = (zonesCount - 1) * tariff.perZone;
        const devicesPrice = selectedDevices.reduce((sum, id) => sum + (devicePrices[id] || 0), 0);
        const total = (basePrice + zonesPrice) * multiplier + devicesPrice;
        
        return Math.round(total);
      };

      const configuratorData = selectedTariff
        ? {
            tariff: tariffNames[selectedTariff] || selectedTariff,
            premise: selectedPremise ? premiseNames[selectedPremise] || selectedPremise : undefined,
            zonesCount,
            selectedDevices: selectedDevices.map((id) => deviceNames[id] || id),
            totalPrice: calculateTotalPrice(),
          }
        : undefined;

      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          configurator: configuratorData,
          language: language, // Передаем текущий язык пользователя
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary-950/20" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Enhanced floating orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/4 rounded-full blur-3xl animate-scale-pulse" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />
      
      {/* Decorative icons */}
      <div className="absolute top-32 right-32 w-24 h-24 opacity-8 blur-xl">
        <div className="text-5xl">📞</div>
      </div>
      <div className="absolute bottom-40 left-24 w-20 h-20 opacity-8 blur-lg">
        <div className="text-4xl">✉️</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full glass-effect border border-primary-500/30 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow" />
            <span className="text-sm text-primary-300 font-medium tracking-wide">Контакты</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4">
            Свяжитесь с нами
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Готовы начать? Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Телефон</h3>
                  <p className="text-gray-400">+7 (495) 123-45-67</p>
                  <p className="text-gray-400">+7 (800) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">info@smarthome.ru</p>
                  <p className="text-gray-400">support@smarthome.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Адрес</h3>
                  <p className="text-gray-400">
                    г. Алматы, ул. Абая, д. 150
                  </p>
                  <p className="text-gray-400">Пн-Пт: 9:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">
                Мы в соцсетях
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("contact.name")} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("contact.phone")} <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("contact.city")}
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder={t("contact.city.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim()}
                className="group relative w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-xl hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 font-bold text-base md:text-lg shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
              >
                <span className="relative z-10">
                  {isSubmitting ? t("contact.sending") : t("contact.send")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

