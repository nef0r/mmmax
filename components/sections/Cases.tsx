"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Cases() {
  const { t } = useLanguage();
  const cases = [
    {
      title: "Загородный дом 250 м²",
      location: "Московская область",
      image: "🏡",
      description: "Полная автоматизация загородного дома с системой отопления, освещения, безопасности и мультимедиа",
      features: ["Умное отопление", "Видеонаблюдение", "Автоматический полив", "Управление бассейном"],
      result: "Экономия энергии 35%",
    },
    {
      title: "Квартира-студия 60 м²",
      location: "Москва, центр",
      image: "🏢",
      description: "Компактное решение для современной квартиры с максимальной функциональностью",
      features: ["Умное освещение", "Климат-контроль", "Умные шторы", "Голосовое управление"],
      result: "Повышение комфорта на 80%",
    },
    {
      title: "Пентхаус 400 м²",
      location: "Санкт-Петербург",
      image: "🏛️",
      description: "Премиальная система для элитного жилья с индивидуальным дизайном и эксклюзивными решениями",
      features: ["Премиум-аудио", "Умные зеркала", "Автоматизация сцен", "Интеграция с лифтом"],
      result: "Рост стоимости недвижимости",
    },
  ];

  return (
    <section id="cases" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black to-primary-900/10">
      {/* Premium background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-600/6 rounded-full blur-3xl animate-float-slow animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50" />
      
      {/* Decorative icons */}
      <div className="absolute top-36 right-36 w-24 h-24 opacity-8 blur-xl">
        <div className="text-5xl">📹</div>
      </div>
      <div className="absolute bottom-44 left-28 w-20 h-20 opacity-8 blur-lg">
        <div className="text-4xl">🪟</div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary-500/20 mb-4 md:mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-glow" />
            <span className="text-xs md:text-sm text-primary-300 font-medium">{t("cases.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4">
            {t("cases.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            {t("cases.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl glass-effect border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20"
            >
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-600/0 to-primary-700/0 group-hover:from-primary-500/20 group-hover:via-primary-600/15 group-hover:to-primary-700/12 transition-all duration-500 rounded-2xl" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/15 to-transparent" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-primary-500/8 rounded-2xl blur-2xl animate-pulse-glow" />
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="text-6xl mb-4">{caseItem.image}</div>
                <div className="mb-2">
                  <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">
                    {caseItem.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {caseItem.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                <div className="space-y-2 mb-6">
                  {caseItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <svg
                        className="w-4 h-4 text-primary-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Результат:</div>
                  <div className="text-lg font-semibold text-primary-400">
                    {caseItem.result}
                  </div>
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

