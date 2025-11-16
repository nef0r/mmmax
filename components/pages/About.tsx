"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const stats = [
    { value: "500+", label: t("hero.stats1") },
    { value: "98%", label: t("hero.stats2") },
    { value: "24/7", label: t("hero.stats3") },
    { value: "10+", label: t("about.stats.years") },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Надежность",
      description: "Мы используем только проверенное оборудование от ведущих производителей",
    },
    {
      icon: "💡",
      title: "Инновации",
      description: "Постоянно следим за новыми технологиями и внедряем их в наши решения",
    },
    {
      icon: "🤝",
      title: "Индивидуальный подход",
      description: "Каждый проект разрабатывается с учетом особенностей вашего дома",
    },
    {
      icon: "⚡",
      title: "Скорость",
      description: "Быстрая установка и настройка системы без лишних хлопот",
    },
  ];

  const team = [
    {
      name: "Александр Иванов",
      role: "Генеральный директор",
      description: "15+ лет опыта в сфере умных технологий",
    },
    {
      name: "Мария Петрова",
      role: "Технический директор",
      description: "Эксперт по интеграции систем умного дома",
    },
    {
      name: "Дмитрий Сидоров",
      role: "Руководитель проектов",
      description: "Обеспечивает качественную реализацию проектов",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden min-h-screen pt-24 md:pt-28">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary-950/20" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Enhanced floating orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/4 rounded-full blur-3xl animate-scale-pulse" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />
      
      {/* Decorative icons */}
      <div className="absolute top-40 left-40 w-28 h-28 opacity-8 blur-2xl">
        <div className="text-6xl">🏢</div>
      </div>
      <div className="absolute bottom-48 right-32 w-24 h-24 opacity-8 blur-xl">
        <div className="text-5xl">⭐</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full glass-effect border border-primary-500/30 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow" />
            <span className="text-sm text-primary-300 font-medium">О компании</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            О компании Умный Макс
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы создаем умные дома нового поколения, объединяя передовые технологии с комфортом и безопасностью
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 rounded-2xl transition-all duration-300" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Наша миссия
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Умный Макс — это команда профессионалов, которая превращает обычные дома в интеллектуальные пространства. 
                Мы верим, что технологии должны делать жизнь проще, безопаснее и комфортнее.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                С 2014 года мы устанавливаем системы умного дома в Алматы и по всему Казахстану. 
                Наш опыт и знания позволяют создавать решения, которые идеально подходят каждому клиенту.
              </p>
            </div>
            <div className="relative">
              <div className="glass-effect border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-8xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold text-white mb-4">Премиум качество</h3>
                <p className="text-gray-300 leading-relaxed">
                  Мы работаем только с проверенными производителями и используем оборудование премиум-класса, 
                  которое прослужит вам долгие годы.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 overflow-hidden"
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

                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 overflow-hidden text-center"
              >
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-600/0 to-primary-700/0 group-hover:from-primary-500/20 group-hover:via-primary-600/15 group-hover:to-primary-700/12 transition-all duration-500 rounded-2xl" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/15 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-500">
                    👤
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="glass-effect border border-primary-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Готовы начать?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Свяжитесь с нами, и мы создадим умный дом вашей мечты
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 font-semibold text-lg overflow-hidden group/btn"
            >
              <span className="relative z-10">Связаться с нами</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

