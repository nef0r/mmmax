"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Базовый",
      price: { monthly: 149500, annual: 1495000 },
      description: "Идеально для небольших квартир",
      features: [
        "Умное освещение (до 10 устройств)",
        "Базовый климат-контроль",
        "Мобильное приложение",
        "Голосовое управление",
        "Техническая поддержка",
      ],
      popular: false,
    },
    {
      name: "Премиум",
      price: { monthly: 299500, annual: 2995000 },
      description: "Для домов и больших квартир",
      features: [
        "Умное освещение (до 50 устройств)",
        "Полный климат-контроль",
        "Система безопасности",
        "Видеонаблюдение (2 камеры)",
        "Мультимедиа система",
        "Приоритетная поддержка 24/7",
        "Гарантия 3 года",
      ],
      popular: true,
    },
    {
      name: "Эксклюзив",
      price: { monthly: 499500, annual: 4995000 },
      description: "Индивидуальные решения",
      features: [
        "Неограниченное количество устройств",
        "Полная автоматизация",
        "Премиум безопасность",
        "Видеонаблюдение (до 10 камер)",
        "Профессиональная аудиосистема",
        "Персональный менеджер",
        "Бессрочная гарантия",
        "Индивидуальный дизайн",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary-950/20" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      {/* Enhanced floating orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary-600/6 rounded-full blur-3xl animate-float-slow animate-pulse-glow" style={{ animationDelay: "3s" }} />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-primary-500/15 rounded-full geometric-shape animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-primary-400/10 rounded-full geometric-shape animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary-500/20 mb-4 md:mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-glow" />
            <span className="text-xs md:text-sm text-primary-300 font-medium">Тарифы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4">
            Тарифные планы
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Выберите оптимальный вариант для вашего дома
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-gray-500"}`}>
              Месячная оплата
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-primary-500 transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-500"}`}>
              Годовая оплата
            </span>
            {isAnnual && (
              <span className="ml-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium">
                Экономия 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-br from-primary-500/25 to-primary-600/15 border-primary-500/60 scale-105 shadow-2xl shadow-primary-500/30"
                  : "bg-white/5 border-white/10 hover:border-primary-500/40 hover:bg-white/8"
              }`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                plan.popular ? "opacity-100" : ""
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-600/5 to-primary-700/10 animate-gradient" />
              </div>
              
              {/* Shimmer effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                plan.popular ? "opacity-100" : ""
              }`}>
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/10 to-transparent" />
              </div>
              
              {/* Glow effect */}
              {plan.popular && (
                <div className="absolute inset-0 bg-primary-500/10 rounded-2xl blur-2xl animate-pulse-glow" />
              )}
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-sm font-semibold shadow-lg shadow-primary-500/50 z-10">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    {isAnnual
                      ? Math.round(plan.price.annual / 12)
                      : plan.price.monthly}
                  </span>
                  <span className="text-gray-400 ml-2">₸/мес</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-500 mt-1">
                    {plan.price.annual.toLocaleString()} ₸/год
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/30"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
              >
                Выбрать план
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

