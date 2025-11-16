"use client";

import { useEffect, useState } from "react";
import { useConfigurator } from "@/contexts/ConfiguratorContext";

const deviceIcons: Record<string, string> = {
  "smart-lighting": "💡",
  "electric-gates": "🚪",
  "electric-curtains": "🪟",
  "climate-control": "🌡️",
  "security-system": "🔒",
  "video-surveillance": "📹",
  "smart-locks": "🔐",
  "smart-sockets": "🔌",
  "smart-switches": "⚡",
  "smart-sensors": "📡",
  "smart-speakers": "🔊",
  "smart-tv": "📺",
  "irrigation-system": "💧",
  "smart-appliances": "🏠",
  "smart-thermostat": "🌡️",
  "smart-blinds": "🪟",
  "smart-doorbell": "📞",
  "smart-smoke-detector": "🚨",
};

export default function AnimatedHouse() {
  const { selectedDevices, zonesCount } = useConfigurator();
  const [lights, setLights] = useState<boolean[]>([]);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; icon: string }>>([]);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Анимация освещения на основе выбранных устройств
    const hasLighting = selectedDevices.includes("smart-lighting");
    const lightCount = Math.min(zonesCount, 6);
    
    if (hasLighting) {
      const newLights = Array(lightCount).fill(false).map((_, i) => {
        setTimeout(() => {
          setLights((prev) => {
            const newLights = [...prev];
            newLights[i] = true;
            return newLights;
          });
        }, i * 150);
        return false;
      });
      setLights(newLights);
    } else {
      setLights([]);
    }

    // Создание частиц для выбранных устройств
    const newParticles = selectedDevices.slice(0, 6).map((deviceId, index) => ({
      id: index,
      x: 20 + (index % 3) * 30,
      y: 10 + Math.floor(index / 3) * 40,
      delay: index * 150,
      icon: deviceIcons[deviceId] || "✨",
    }));
    setParticles(newParticles);

    // Интенсивность свечения зависит от количества устройств
    setGlowIntensity(Math.min(selectedDevices.length * 0.15, 1));
  }, [selectedDevices, zonesCount]);

  const hasSecurity = selectedDevices.some((id) =>
    ["security-system", "video-surveillance", "smart-locks", "smart-doorbell"].includes(id)
  );
  const hasClimate = selectedDevices.some((id) =>
    ["climate-control", "smart-thermostat"].includes(id)
  );
  const hasMultimedia = selectedDevices.some((id) =>
    ["smart-speakers", "smart-tv"].includes(id)
  );
  const hasLighting = selectedDevices.includes("smart-lighting");

  return (
    <div className="relative w-full h-full flex items-center justify-center group">
      {/* Премиальное свечение */}
      {selectedDevices.length > 0 && (
        <>
          <div 
            className="absolute inset-0 rounded-full bg-primary-500/30 blur-2xl animate-pulse"
            style={{ opacity: glowIntensity }}
          />
          <div 
            className="absolute inset-0 rounded-full bg-primary-400/20 blur-xl"
            style={{ opacity: glowIntensity * 0.7 }}
          />
        </>
      )}

      {/* SVG дом с премиальными анимациями */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        className="relative z-10 drop-shadow-lg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Премиальные градиенты и эффекты */}
        <defs>
          <linearGradient id="houseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.08)" />
          </linearGradient>
          <linearGradient id="foundationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(100, 100, 100, 0.3)" />
            <stop offset="100%" stopColor="rgba(60, 60, 60, 0.2)" />
          </linearGradient>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.4)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.25)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Фундамент дома (под стенами) */}
        <rect
          x="10"
          y="44"
          width="44"
          height="16"
          fill="url(#foundationGradient)"
          className="transition-all duration-700"
          rx="1"
          filter="url(#shadow)"
        />
        
        {/* Декоративные линии фундамента */}
        <line
          x1="12"
          y1="48"
          x2="52"
          y2="48"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="0.5"
        />
        <line
          x1="12"
          y1="52"
          x2="52"
          y2="52"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="0.5"
        />

        {/* Стены дома */}
        <rect
          x="12"
          y="20"
          width="40"
          height="24"
          fill="url(#houseGradient)"
          className="transition-all duration-700"
          rx="1"
          filter="url(#shadow)"
        />
        
        {/* Декоративные элементы стен */}
        <rect
          x="14"
          y="22"
          width="36"
          height="1"
          fill="rgba(255, 255, 255, 0.1)"
        />
        <rect
          x="14"
          y="38"
          width="36"
          height="1"
          fill="rgba(255, 255, 255, 0.08)"
        />

        {/* Крыша с премиальным градиентом */}
        <polygon
          points="32,8 12,24 52,24"
          fill="url(#roofGradient)"
          className="transition-all duration-700"
          filter="url(#glow)"
        />

        {/* Окна с динамической подсветкой */}
        {Array.from({ length: 6 }).map((_, index) => {
          const windowX = 18 + (index % 3) * 12;
          const windowY = 28 + Math.floor(index / 3) * 12;
          const isOn = lights[index] || false;
          
          return (
            <g key={index}>
              <rect
                x={windowX}
                y={windowY}
                width="8"
                height="8"
                fill={isOn ? "rgba(255, 255, 150, 0.9)" : "rgba(255, 255, 255, 0.15)"}
                className="transition-all duration-500"
                rx="1"
              >
                {isOn && (
                  <animate
                    attributeName="fill-opacity"
                    values="0.6;1;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                )}
              </rect>
              {isOn && (
                <rect
                  x={windowX + 1}
                  y={windowY + 1}
                  width="6"
                  height="6"
                  fill="rgba(255, 255, 200, 0.8)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </rect>
              )}
            </g>
          );
        })}

        {/* Дверь с эффектом безопасности */}
        <g>
          <rect
            x="26"
            y="32"
            width="12"
            height="12"
            fill={hasSecurity ? "rgba(14, 165, 233, 0.5)" : "rgba(255, 255, 255, 0.25)"}
            className="transition-all duration-500"
            rx="1"
            filter="url(#shadow)"
          >
            {hasSecurity && (
              <animate
                attributeName="fill-opacity"
                values="0.4;0.7;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </rect>
          {/* Ручка двери */}
          <circle
            cx="35"
            cy="38"
            r="0.8"
            fill="rgba(255, 255, 255, 0.6)"
          />
          {/* Декоративная линия двери */}
          <line
            x1="32"
            y1="32"
            x2="32"
            y2="44"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.5"
          />
        </g>

        {/* Эффект климат-контроля (концентрические волны) */}
        {hasClimate && (
          <>
            <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="0.5">
              <animate attributeName="r" values="25;32;25" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.5">
              <animate attributeName="r" values="22;28;22" dur="4s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" begin="1s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* Эффект безопасности (пульсирующие камеры) */}
        {hasSecurity && (
          <>
            <circle cx="16" cy="16" r="2.5" fill="rgba(14, 165, 233, 1)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="2;3;2" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="48" cy="16" r="2.5" fill="rgba(14, 165, 233, 1)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="2;3;2" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* Эффект мультимедиа (звуковые волны) */}
        {hasMultimedia && (
          <g>
            <path
              d="M 20 50 Q 32 45 44 50"
              fill="none"
              stroke="rgba(14, 165, 233, 0.6)"
              strokeWidth="1.5"
            >
              <animate
                attributeName="d"
                values="M 20 50 Q 32 45 44 50;M 20 50 Q 32 35 44 50;M 20 50 Q 32 45 44 50"
                dur="1.2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 20 52 Q 32 47 44 52"
              fill="none"
              stroke="rgba(14, 165, 233, 0.4)"
              strokeWidth="1"
            >
              <animate
                attributeName="d"
                values="M 20 52 Q 32 47 44 52;M 20 52 Q 32 37 44 52;M 20 52 Q 32 47 44 52"
                dur="1.2s"
                begin="0.3s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        )}

        {/* Эффект освещения (лучи света) */}
        {hasLighting && lights.some(l => l) && (
          <g>
            {lights.map((isOn, i) => {
              if (!isOn) return null;
              const windowX = 18 + (i % 3) * 12 + 4;
              const windowY = 28 + Math.floor(i / 3) * 12 + 4;
              return (
                <line
                  key={i}
                  x1={windowX}
                  y1={windowY}
                  x2={windowX}
                  y2={windowY - 8}
                  stroke="rgba(255, 255, 200, 0.6)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </g>
        )}
      </svg>

      {/* Плавающие иконки устройств с премиальной анимацией */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-sm animate-float-premium pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}ms`,
          }}
        >
          <div className="relative">
            <span className="relative z-10">{particle.icon}</span>
            <span 
              className="absolute inset-0 blur-sm opacity-50"
              style={{ filter: 'blur(4px)' }}
            >
              {particle.icon}
            </span>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float-premium {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-12px) translateX(6px) scale(1.15) rotate(5deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px) translateX(-6px) scale(0.95) rotate(-5deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-16px) translateX(4px) scale(1.1) rotate(3deg);
            opacity: 0.9;
          }
        }
        .animate-float-premium {
          animation: float-premium 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

