import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfiguratorProvider } from "@/contexts/ConfiguratorContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Smart Home - Премиальные решения для умного дома",
  description: "Современные технологии для создания идеального умного дома",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <ConfiguratorProvider>
              {children}
            </ConfiguratorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

