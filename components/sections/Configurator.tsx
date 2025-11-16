"use client";

import { useState, useMemo, useEffect } from "react";
import { useConfigurator } from "@/contexts/ConfiguratorContext";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHouse from "@/components/AnimatedHouse";

export default function Configurator() {
  const {
    selectedDevices,
    setSelectedDevices,
    selectedTariff,
    setSelectedTariff,
    zonesCount,
    setZonesCount,
    selectedPremise,
    setSelectedPremise,
  } = useConfigurator();
  const { t } = useLanguage();

  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [zonesConfirmed, setZonesConfirmed] = useState(false);

  // Автоматический переход к следующему шагу после выбора тарифа
  useEffect(() => {
    if (selectedTariff && currentStep === 1 && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(2);
          setIsTransitioning(false);
        }, 300);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedTariff, currentStep, isTransitioning]);

  // Автоматический переход к следующему шагу после выбора типа помещения
  useEffect(() => {
    if (selectedPremise && currentStep === 2 && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(3);
          setIsTransitioning(false);
        }, 300);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedPremise, currentStep, isTransitioning]);

  // Автоматический переход только если пользователь подтвердил выбор зон
  useEffect(() => {
    if (zonesConfirmed && currentStep === 3 && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(4);
          setIsTransitioning(false);
          setZonesConfirmed(false);
        }, 300);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [zonesConfirmed, currentStep, isTransitioning]);

  const tariffs = [
    {
      id: "economy",
      name: "Эконом",
      basePrice: 99500,
      pricePerZone: 25000,
      icon: "💰",
      description: "Базовый функционал",
      features: ["Умное освещение", "Базовое управление", "Мобильное приложение"],
    },
    {
      id: "standard",
      name: "Стандарт",
      basePrice: 199500,
      pricePerZone: 40000,
      icon: "⭐",
      description: "Оптимальный выбор",
      features: [
        "Умное освещение",
        "Климат-контроль",
        "Безопасность",
        "Голосовое управление",
      ],
    },
    {
      id: "premium",
      name: "Премиум",
      basePrice: 399500,
      pricePerZone: 60000,
      icon: "👑",
      description: "Максимальные возможности",
      features: [
        "Все функции Стандарт",
        "Видеонаблюдение",
        "Мультимедиа система",
        "Персональный менеджер",
        "Приоритетная поддержка",
      ],
    },
  ];

  const premises = [
    {
      id: "apartment",
      name: "Квартира",
      icon: "🏢",
      multiplier: 1.0,
      description: "Стандартный коэффициент",
    },
    {
      id: "house",
      name: "Дом",
      icon: "🏡",
      multiplier: 1.3,
      description: "+30% к стоимости",
    },
    {
      id: "office",
      name: "Офис",
      icon: "🏛️",
      multiplier: 1.2,
      description: "+20% к стоимости",
    },
  ];

  const devices = [
    {
      id: "smart-lighting",
      name: "Умное освещение",
      price: 75000,
      icon: "💡",
      category: "Освещение",
    },
    {
      id: "electric-gates",
      name: "Электрические ворота",
      price: 225000,
      icon: "🚪",
      category: "Безопасность",
    },
    {
      id: "electric-curtains",
      name: "Электрический карниз",
      price: 90000,
      icon: "🪟",
      category: "Комфорт",
    },
    {
      id: "climate-control",
      name: "Климат-контроль",
      price: 175000,
      icon: "🌡️",
      category: "Климат",
    },
    {
      id: "security-system",
      name: "Система безопасности",
      price: 200000,
      icon: "🔒",
      category: "Безопасность",
    },
    {
      id: "video-surveillance",
      name: "Видеонаблюдение",
      price: 125000,
      icon: "📹",
      category: "Безопасность",
    },
    {
      id: "smart-locks",
      name: "Умные замки",
      price: 110000,
      icon: "🔐",
      category: "Безопасность",
    },
    {
      id: "smart-sockets",
      name: "Умные розетки",
      price: 40000,
      icon: "🔌",
      category: "Управление",
    },
    {
      id: "smart-switches",
      name: "Умные выключатели",
      price: 60000,
      icon: "⚡",
      category: "Управление",
    },
    {
      id: "smart-sensors",
      name: "Умные датчики",
      price: 50000,
      icon: "📡",
      category: "Автоматизация",
    },
    {
      id: "smart-speakers",
      name: "Умные колонки",
      price: 75000,
      icon: "🔊",
      category: "Мультимедиа",
    },
    {
      id: "smart-tv",
      name: "Умный телевизор",
      price: 250000,
      icon: "📺",
      category: "Мультимедиа",
    },
    {
      id: "irrigation-system",
      name: "Система полива",
      price: 150000,
      icon: "💧",
      category: "Участок",
    },
    {
      id: "smart-appliances",
      name: "Умная бытовая техника",
      price: 300000,
      icon: "🏠",
      category: "Бытовая техника",
    },
    {
      id: "smart-thermostat",
      name: "Умный термостат",
      price: 100000,
      icon: "🌡️",
      category: "Климат",
    },
    {
      id: "smart-blinds",
      name: "Умные жалюзи",
      price: 80000,
      icon: "🪟",
      category: "Комфорт",
    },
    {
      id: "smart-doorbell",
      name: "Умный видеодомофон",
      price: 90000,
      icon: "📞",
      category: "Безопасность",
    },
    {
      id: "smart-smoke-detector",
      name: "Умный датчик дыма",
      price: 60000,
      icon: "🚨",
      category: "Безопасность",
    },
  ];

  const devicesPrice = useMemo(() => {
    return selectedDevices.reduce((sum, deviceId) => {
      const device = devices.find((d) => d.id === deviceId);
      return sum + (device?.price || 0);
    }, 0);
  }, [selectedDevices]);

  const totalPrice = useMemo(() => {
    if (!selectedTariff || !selectedPremise) return devicesPrice;

    const tariff = tariffs.find((t) => t.id === selectedTariff);
    const premise = premises.find((p) => p.id === selectedPremise);

    if (!tariff || !premise) return devicesPrice;

    const basePrice = tariff.basePrice;
    const zonesPrice = (zonesCount - 1) * tariff.pricePerZone;
    const baseTotal = (basePrice + zonesPrice) * premise.multiplier;

    return Math.round(baseTotal + devicesPrice);
  }, [selectedTariff, selectedPremise, zonesCount, devicesPrice]);

  const handleDeviceToggle = (deviceId: string) => {
    if (selectedDevices.includes(deviceId)) {
      setSelectedDevices(selectedDevices.filter((id) => id !== deviceId));
    } else {
      setSelectedDevices([...selectedDevices, deviceId]);
    }
  };

  const deviceCategories = Array.from(
    new Set(devices.map((d) => d.category))
  ).sort();

  const handleOrder = () => {
    if (!selectedTariff || !selectedPremise) {
      return;
    }
    // Плавная прокрутка к форме контактов
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleStepBack = () => {
    if (currentStep > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const newStep = currentStep - 1;
        setCurrentStep(newStep);
        // Сбрасываем подтверждение зон при возврате назад
        if (newStep < 3) {
          setZonesConfirmed(false);
        }
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section
      id="configurator"
      className="py-20 md:py-32 relative overflow-hidden min-h-screen"
    >
      {/* Premium background with smooth animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/30 to-black" />
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      
      {/* Enhanced floating orbs */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary-500/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-primary-600/8 rounded-full blur-3xl animate-float-slow animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-400/4 rounded-full blur-3xl animate-scale-pulse" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
      
      {/* Decorative smart home icons */}
      <div className="absolute top-40 right-40 w-28 h-28 opacity-8 blur-2xl">
        <div className="text-6xl">📱</div>
      </div>
      <div className="absolute bottom-48 left-32 w-24 h-24 opacity-8 blur-xl">
        <div className="text-5xl">⚡</div>
      </div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 opacity-8 blur-lg">
        <div className="text-4xl">🔊</div>
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-1/5 right-1/5 w-40 h-40 border border-primary-500/20 rounded-full geometric-shape animate-rotate-slow" />
      <div className="absolute bottom-1/5 left-1/5 w-32 h-32 border border-primary-400/15 rounded-full geometric-shape animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full glass-effect border border-primary-500/30 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow" />
            <span className="text-sm text-primary-300 font-medium tracking-wide">{t("config.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4">
            {t("config.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            {t("config.description")}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10 -z-10" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 -z-10"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
            
            {/* Steps */}
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50 scale-110"
                      : "bg-white/10 text-gray-400 border border-white/20"
                  }`}
                >
                  {step < currentStep ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                  <span className={`mt-2 text-xs font-medium transition-colors ${
                    step <= currentStep ? "text-primary-300" : "text-gray-500"
                  }`}>
                    {step === 1 && t("config.step1")}
                    {step === 2 && t("config.step2")}
                    {step === 3 && t("config.step3")}
                    {step === 4 && t("config.step4")}
                  </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Steps */}
          <div className="lg:col-span-2">
            <div className="relative min-h-[600px]">
              {/* Step 1: Tariff Selection */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  currentStep === 1
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : currentStep > 1
                    ? "opacity-0 -translate-x-full pointer-events-none"
                    : "opacity-0 translate-x-full pointer-events-none"
                } ${isTransitioning ? "transition-none" : ""}`}
              >
                <div className="glass-effect border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group/container">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover/container:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/40 to-primary-600/30 flex items-center justify-center text-primary-300 font-bold text-lg shadow-lg shadow-primary-500/30">
                        1
                      </span>
                      <span className="bg-gradient-to-r from-white via-primary-200 to-gray-300 bg-clip-text text-transparent">
                        {t("config.tariff.title")}
                      </span>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {tariffs.map((tariff) => (
                      <button
                        key={tariff.id}
                        onClick={() => {
                          if (!isTransitioning) {
                            setSelectedTariff(tariff.id);
                          }
                        }}
                        disabled={isTransitioning}
                        className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 text-left overflow-hidden ${
                          selectedTariff === tariff.id
                            ? "glass-effect border-primary-500/60 scale-[1.02] shadow-2xl shadow-primary-500/40 animate-pulse-glow"
                            : "glass-effect border-white/10 hover:border-primary-500/50 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        }`}
                      >
                        {selectedTariff === tariff.id && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/25 via-primary-600/15 to-primary-700/10 animate-gradient" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/15 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/10 to-transparent" />
                          </>
                        )}
                        {selectedTariff !== tariff.id && (
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-600/3 to-primary-700/5" />
                          </div>
                        )}
                        <div className="relative z-10">
                          <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">
                            {tariff.icon}
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                            {tariff.name}
                          </h4>
                          <p className="text-gray-300 text-sm mb-5">{tariff.description}</p>
                          <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-6">
                            от {tariff.basePrice.toLocaleString()} ₸
                          </div>
                          <ul className="space-y-3">
                            {tariff.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                              >
                                <svg
                                  className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0"
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
                              </li>
                            ))}
                          </ul>
                          {selectedTariff === tariff.id && (
                            <div className="absolute top-4 right-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 2: Premise Type Selection */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  currentStep === 2
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : currentStep > 2
                    ? "opacity-0 -translate-x-full pointer-events-none"
                    : "opacity-0 translate-x-full pointer-events-none"
                } ${isTransitioning ? "transition-none" : ""}`}
              >
                <div className="glass-effect border border-white/10 rounded-2xl p-6 md:p-8">
                  {currentStep > 2 && (
                    <button
                      onClick={handleStepBack}
                      className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>{t("config.back")}</span>
                    </button>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center text-primary-300 font-bold text-lg">
                      2
                    </span>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {t("config.premise.title")}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {premises.map((premise) => (
                      <button
                        key={premise.id}
                        onClick={() => {
                          if (!isTransitioning) {
                            setSelectedPremise(premise.id);
                          }
                        }}
                        disabled={isTransitioning}
                        className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 text-left overflow-hidden ${
                          selectedPremise === premise.id
                            ? "glass-effect border-primary-500/50 scale-[1.02] shadow-2xl shadow-primary-500/30"
                            : "glass-effect border-white/10 hover:border-primary-500/40 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                        }`}
                      >
                        {selectedPremise === premise.id && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/25 via-primary-600/15 to-primary-700/10 animate-gradient" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/15 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/10 to-transparent" />
                          </>
                        )}
                        {selectedPremise !== premise.id && (
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-600/3 to-primary-700/5" />
                          </div>
                        )}
                        <div className="relative z-10">
                          <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">
                            {premise.icon}
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                            {premise.name}
                          </h4>
                          <p className="text-gray-300 text-sm">{premise.description}</p>
                          {selectedPremise === premise.id && (
                            <div className="absolute top-4 right-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Zones Count */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  currentStep === 3
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : currentStep > 3
                    ? "opacity-0 -translate-x-full pointer-events-none"
                    : "opacity-0 translate-x-full pointer-events-none"
                } ${isTransitioning ? "transition-none" : ""}`}
              >
                <div className="glass-effect border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10">
                  {currentStep > 3 && (
                    <button
                      onClick={handleStepBack}
                      className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>{t("config.back")}</span>
                    </button>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center text-primary-300 font-bold text-lg">
                      3
                    </span>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {t("config.zones.title")}
                    </span>
                  </h3>
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <span className="text-sm md:text-base text-gray-400">{t("config.zones.label")}</span>
                      <span className="text-2xl md:text-3xl font-bold text-white">{zonesCount}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={zonesCount}
                      onChange={(e) => setZonesCount(Number(e.target.value))}
                      className="w-full h-2 md:h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500 transition-all"
                      style={{
                        background: `linear-gradient(to right, rgb(14, 165, 233) 0%, rgb(14, 165, 233) ${((zonesCount - 1) / 19) * 100}%, rgba(255, 255, 255, 0.1) ${((zonesCount - 1) / 19) * 100}%, rgba(255, 255, 255, 0.1) 100%)`,
                      }}
                    />
                    <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-500">
                      <span>1</span>
                      <span>20</span>
                    </div>
                    <div className="mt-4 md:mt-6 flex gap-3 md:gap-4">
                      <button
                        onClick={() => setZonesCount(Math.max(1, zonesCount - 1))}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-300 active:scale-95"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={zonesCount}
                        onChange={(e) => {
                          const value = Math.min(20, Math.max(1, Number(e.target.value) || 1));
                          setZonesCount(value);
                        }}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-center text-lg md:text-xl font-semibold focus:outline-none focus:border-primary-500/50 transition-all"
                      />
                      <button
                        onClick={() => setZonesCount(Math.min(20, zonesCount + 1))}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-300 active:scale-95"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        if (!isTransitioning) {
                          setZonesConfirmed(true);
                        }
                      }}
                      disabled={isTransitioning}
                      className="mt-6 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t("config.zones.continue")}
                    </button>
                    {selectedTariff && zonesCount > 1 && (
                      <div className="mt-4 text-center text-sm text-gray-400">
                        {t("config.zones.additional")}:{" "}
                        <span className="text-primary-400 font-semibold">
                          {((zonesCount - 1) *
                            tariffs.find((t) => t.id === selectedTariff)!.pricePerZone).toLocaleString()}{" "}
                          ₸
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 4: Devices Selection */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  currentStep === 4
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-full pointer-events-none"
                } ${isTransitioning ? "transition-none" : ""}`}
              >
                <div className="glass-effect border border-white/10 rounded-2xl p-6 md:p-8">
                  <button
                    onClick={handleStepBack}
                    className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>{t("config.back")}</span>
                  </button>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center text-primary-300 font-bold text-lg">
                      4
                    </span>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {t("config.devices.title")}
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
                    {t("config.devices.description")}
                  </p>

                  {deviceCategories.map((category) => {
                    const categoryDevices = devices.filter(
                      (d) => d.category === category
                    );
                    return (
                      <div key={category} className="mb-10">
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
                          {category}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {categoryDevices.map((device) => {
                            const isSelected = selectedDevices.includes(device.id);
                            return (
                              <button
                                key={device.id}
                                onClick={() => handleDeviceToggle(device.id)}
                                className={`group relative p-5 rounded-xl border transition-all duration-300 text-left overflow-hidden ${
                                  isSelected
                                    ? "glass-effect border-primary-500/60 shadow-lg shadow-primary-500/30 scale-[1.02] animate-pulse-glow"
                                    : "glass-effect border-white/10 hover:border-primary-500/50 hover:scale-[1.01] hover:shadow-md hover:shadow-primary-500/15"
                                }`}
                              >
                                {isSelected && (
                                  <>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/15 to-primary-700/12 animate-gradient" />
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/15 rounded-full blur-xl animate-pulse" />
                                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/10 to-transparent" />
                                  </>
                                )}
                                {!isSelected && (
                                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-600/3 to-primary-700/5" />
                                  </div>
                                )}
                                <div className="relative z-10 flex items-start justify-between gap-3">
                                  <div className="flex items-center gap-3 flex-1">
                                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                      {device.icon}
                                    </span>
                                    <div className="flex-1">
                                      <h5 className="text-white font-bold mb-1 group-hover:text-primary-300 transition-colors">
                                        {device.name}
                                      </h5>
                                      <p className="text-primary-400 font-semibold text-sm">
                                        {device.price.toLocaleString()} ₸
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                      isSelected
                                        ? "bg-primary-500 border-primary-500 shadow-lg shadow-primary-500/50"
                                        : "border-gray-600 group-hover:border-primary-500/50"
                                    }`}
                                  >
                                    {isSelected && (
                                      <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={3}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  {selectedDevices.length > 0 && (
                    <div className="mt-8 p-6 rounded-2xl glass-effect border border-primary-500/30 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400 mb-1 font-medium">
                            {t("config.devices.selected")}
                          </div>
                          <div className="text-3xl font-bold text-primary-400">
                            {selectedDevices.length}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1 font-medium">
                            {t("config.devices.additional")}
                          </div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                            +{devicesPrice.toLocaleString()} ₸
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Fixed Animated House & Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Animated House */}
              <div className="glass-effect border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center relative overflow-hidden group/house">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover/house:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-full max-w-[280px] aspect-square mb-6 z-10">
                  <AnimatedHouse />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full rounded-full bg-primary-500/15 blur-2xl animate-pulse animate-pulse-glow" />
                    <div className="w-full h-full rounded-full bg-primary-400/10 blur-xl animate-scale-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 relative z-10">
                  {t("config.summary.house")}
                </p>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover/house:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/5 to-transparent" />
                </div>
              </div>

              {/* Summary */}
              <div className="glass-effect border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl relative overflow-hidden group/summary">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover/summary:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover/summary:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400/5 to-transparent" />
                </div>
                
                <div className="mb-4 relative z-10">
                  <div className="text-gray-400 text-sm mb-1 font-medium">{t("config.summary.total")}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
                    {totalPrice > 0 ? `${totalPrice.toLocaleString()} ₸` : "—"}
                  </div>
                </div>
                {selectedTariff && selectedPremise && (
                  <div className="space-y-3 mb-6">
                    <div className="text-xs text-gray-400 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                        {tariffs.find((t) => t.id === selectedTariff)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {premises.find((p) => p.id === selectedPremise)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {zonesCount} {zonesCount === 1 ? "зона" : zonesCount < 5 ? "зоны" : "зон"}
                      </span>
                      {selectedDevices.length > 0 && (
                        <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                          {selectedDevices.length} {selectedDevices.length === 1 ? "элемент" : selectedDevices.length < 5 ? "элемента" : "элементов"}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <button
                  onClick={handleOrder}
                  disabled={!selectedTariff || !selectedPremise || totalPrice === 0}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-xl hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 transition-all duration-300 font-bold text-base shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <span className="relative z-10">{t("config.order")}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
