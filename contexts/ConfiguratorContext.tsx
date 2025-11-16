"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ConfiguratorContextType {
  selectedDevices: string[];
  setSelectedDevices: (devices: string[]) => void;
  selectedTariff: string | null;
  setSelectedTariff: (tariff: string | null) => void;
  zonesCount: number;
  setZonesCount: (count: number) => void;
  selectedPremise: string | null;
  setSelectedPremise: (premise: string | null) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(
  undefined
);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [zonesCount, setZonesCount] = useState(1);
  const [selectedPremise, setSelectedPremise] = useState<string | null>(null);

  return (
    <ConfiguratorContext.Provider
      value={{
        selectedDevices,
        setSelectedDevices,
        selectedTariff,
        setSelectedTariff,
        zonesCount,
        setZonesCount,
        selectedPremise,
        setSelectedPremise,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error("useConfigurator must be used within ConfiguratorProvider");
  }
  return context;
}

