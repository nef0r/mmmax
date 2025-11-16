"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface Product {
  id: string;
  name: string;
  price: number;
  icon: string;
  category: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "smart-lighting",
    name: "Умное освещение",
    price: 75000,
    icon: "💡",
    category: "Освещение",
    description: "Полный контроль освещения через приложение. Настройка яркости, цвета и автоматических сценариев.",
    features: ["Управление через приложение", "Изменение цвета и яркости", "Автоматические сценарии", "Энергосбережение"],
  },
  {
    id: "electric-gates",
    name: "Электрические ворота",
    price: 225000,
    icon: "🚪",
    category: "Безопасность",
    description: "Автоматические ворота с дистанционным управлением и интеграцией в систему умного дома.",
    features: ["Дистанционное управление", "Интеграция с системой", "Безопасность", "Долговечность"],
  },
  {
    id: "electric-curtains",
    name: "Электрический карниз",
    price: 90000,
    icon: "🪟",
    category: "Комфорт",
    description: "Автоматическое управление шторами и карнизами по расписанию или через приложение.",
    features: ["Автоматическое открытие/закрытие", "Управление по расписанию", "Интеграция с освещением", "Тихая работа"],
  },
  {
    id: "climate-control",
    name: "Климат-контроль",
    price: 175000,
    icon: "🌡️",
    category: "Климат",
    description: "Умная система управления климатом с зональным контролем температуры и влажности.",
    features: ["Зональный контроль", "Автоматическая регулировка", "Энергосбережение", "Мониторинг влажности"],
  },
  {
    id: "security-system",
    name: "Система безопасности",
    price: 200000,
    icon: "🔒",
    category: "Безопасность",
    description: "Комплексная система безопасности с датчиками движения, открытия дверей и окон.",
    features: ["Датчики движения", "Охрана периметра", "Мобильные уведомления", "Интеграция с видеонаблюдением"],
  },
  {
    id: "video-surveillance",
    name: "Видеонаблюдение",
    price: 125000,
    icon: "📹",
    category: "Безопасность",
    description: "Система видеонаблюдения с облачным хранилищем и доступом через мобильное приложение.",
    features: ["HD камеры", "Облачное хранилище", "Доступ через приложение", "Ночное видение"],
  },
  {
    id: "smart-locks",
    name: "Умные замки",
    price: 110000,
    icon: "🔐",
    category: "Безопасность",
    description: "Умные замки с отпечатком пальца, кодом и управлением через приложение.",
    features: ["Отпечаток пальца", "Цифровой код", "Управление через приложение", "История доступа"],
  },
  {
    id: "smart-sockets",
    name: "Умные розетки",
    price: 40000,
    icon: "🔌",
    category: "Управление",
    description: "Умные розетки с дистанционным управлением и мониторингом энергопотребления.",
    features: ["Дистанционное управление", "Мониторинг энергопотребления", "Расписание работы", "Защита от перегрузки"],
  },
  {
    id: "smart-switches",
    name: "Умные выключатели",
    price: 60000,
    icon: "⚡",
    category: "Управление",
    description: "Умные выключатели с сенсорным управлением и интеграцией в систему умного дома.",
    features: ["Сенсорное управление", "Интеграция с системой", "Современный дизайн", "Простая установка"],
  },
  {
    id: "smart-sensors",
    name: "Умные датчики",
    price: 50000,
    icon: "📡",
    category: "Автоматизация",
    description: "Набор умных датчиков для автоматизации различных процессов в доме.",
    features: ["Датчик движения", "Датчик температуры", "Датчик влажности", "Датчик освещенности"],
  },
  {
    id: "smart-speakers",
    name: "Умные колонки",
    price: 75000,
    icon: "🔊",
    category: "Мультимедиа",
    description: "Умные колонки с голосовым помощником и интеграцией в систему умного дома.",
    features: ["Голосовой помощник", "Высокое качество звука", "Интеграция с системой", "Многокомнатное аудио"],
  },
  {
    id: "smart-tv",
    name: "Умный телевизор",
    price: 150000,
    icon: "📺",
    category: "Мультимедиа",
    description: "Умный телевизор с интеграцией в систему умного дома и голосовым управлением.",
    features: ["4K разрешение", "Голосовое управление", "Интеграция с системой", "Умные приложения"],
  },
  {
    id: "irrigation-system",
    name: "Система полива",
    price: 100000,
    icon: "💧",
    category: "Автоматизация",
    description: "Автоматическая система полива с датчиками влажности почвы и погодными данными.",
    features: ["Автоматический полив", "Датчики влажности", "Погодные данные", "Экономия воды"],
  },
  {
    id: "smart-appliances",
    name: "Умная техника",
    price: 300000,
    icon: "🏠",
    category: "Комфорт",
    description: "Интеграция умной бытовой техники в систему умного дома.",
    features: ["Управление через приложение", "Энергосбережение", "Умные программы", "Удаленный мониторинг"],
  },
  {
    id: "smart-thermostat",
    name: "Умный термостат",
    price: 85000,
    icon: "🌡️",
    category: "Климат",
    description: "Умный термостат с обучением ваших предпочтений и автоматической оптимизацией.",
    features: ["Самообучение", "Автоматическая оптимизация", "Энергосбережение", "Удаленное управление"],
  },
  {
    id: "smart-blinds",
    name: "Умные жалюзи",
    price: 95000,
    icon: "🪟",
    category: "Комфорт",
    description: "Автоматические жалюзи с управлением по расписанию и интеграцией с освещением.",
    features: ["Автоматическое управление", "Расписание", "Интеграция с освещением", "Защита от солнца"],
  },
  {
    id: "smart-doorbell",
    name: "Умный звонок",
    price: 65000,
    icon: "📞",
    category: "Безопасность",
    description: "Умный видеозвонок с возможностью видеть и разговаривать с посетителями через приложение.",
    features: ["Видеозвонок", "Двусторонняя связь", "Запись видео", "Мобильные уведомления"],
  },
  {
    id: "smart-smoke-detector",
    name: "Умный датчик дыма",
    price: 55000,
    icon: "🚨",
    category: "Безопасность",
    description: "Умный датчик дыма с мобильными уведомлениями и интеграцией в систему безопасности.",
    features: ["Мобильные уведомления", "Интеграция с системой", "Автономная работа", "Тестирование через приложение"],
  },
];

const categories = ["Все", "Освещение", "Безопасность", "Комфорт", "Климат", "Управление", "Автоматизация", "Мультимедиа"];

export default function Catalog() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t("catalog.all"));
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "Все" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
      <div className="absolute top-32 left-32 w-24 h-24 opacity-8 blur-xl">
        <div className="text-5xl">💡</div>
      </div>
      <div className="absolute bottom-40 right-24 w-20 h-20 opacity-8 blur-lg">
        <div className="text-4xl">🚪</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full glass-effect border border-primary-500/30 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow" />
            <span className="text-sm text-primary-300 font-medium">Каталог</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Каталог товаров
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Выберите умные устройства для вашего дома
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 md:mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl glass-effect border border-white/10 focus:border-primary-500/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-500/20 to-primary-600/20 border-primary-500/50 text-white shadow-lg shadow-primary-500/30"
                    : "glass-effect border-white/10 text-gray-300 hover:border-primary-500/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl glass-effect border border-white/10 hover:border-primary-500/60 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/30"
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
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {product.icon}
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-medium border border-primary-500/30">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-300 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                      {product.price.toLocaleString()} ₸
                    </div>
                  </div>
                  <Link
                    href="/#configurator"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 font-semibold text-sm overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Выбрать</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">{t("catalog.notFound")}</h3>
            <p className="text-gray-400">{t("catalog.notFoundDesc")}</p>
          </div>
        )}
      </div>
    </section>
  );
}

