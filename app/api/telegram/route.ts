import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  message?: string;
  language?: string; // Язык обращения пользователя
  configurator?: {
    tariff?: string;
    premise?: string;
    zonesCount?: number;
    selectedDevices?: string[];
    totalPrice?: number;
  };
}

function formatTelegramMessage(data: LeadData): string {
  const timestamp = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    dateStyle: "short",
    timeStyle: "medium",
  });

  // Определяем язык и соответствующий флаг/текст
  const languageInfo = data.language === "kz" 
    ? { flag: "🇰🇿", name: "Қазақша", manager: "Казахскоязычный менеджер" }
    : { flag: "🇷🇺", name: "Русский", manager: "Русскоязычный менеджер" };

  let message = `🏠 *Новая заявка с сайта УмныйМАКС*\n\n`;
  message += `${languageInfo.flag} *Язык обращения:* ${languageInfo.name}\n`;
  message += `👨‍💼 *Менеджер:* ${languageInfo.manager}\n\n`;
  message += `👤 *Контактные данные:*\n`;
  message += `Имя: ${data.name}\n`;
  message += `Телефон: ${data.phone}\n`;
  if (data.city) {
    message += `Город: ${data.city}\n`;
  }
  if (data.email) {
    message += `Email: ${data.email}\n`;
  }
  message += `\n`;

  if (data.message) {
    message += `💬 *Сообщение:*\n${data.message}\n\n`;
  }

  if (data.configurator) {
    const config = data.configurator;
    message += `⚙️ *Конфигурация умного дома:*\n`;
    
    if (config.tariff) {
      message += `Тариф: ${config.tariff}\n`;
    }
    if (config.premise) {
      message += `Тип помещения: ${config.premise}\n`;
    }
    if (config.zonesCount) {
      message += `Количество зон: ${config.zonesCount}\n`;
    }
    if (config.selectedDevices && config.selectedDevices.length > 0) {
      message += `Выбранные элементы (${config.selectedDevices.length}):\n`;
      config.selectedDevices.forEach((device, index) => {
        message += `${index + 1}. ${device}\n`;
      });
    }
    if (config.totalPrice) {
      message += `💰 *Итоговая стоимость:* ${config.totalPrice.toLocaleString("ru-RU")} ₸\n`;
    }
    message += `\n`;
  }

  message += `🕐 *Время заявки:* ${timestamp}`;

  return message;
}

export async function POST(request: NextRequest) {
  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Telegram bot not configured" },
        { status: 500 }
      );
    }

    const data: LeadData = await request.json();

    // Валидация обязательных полей
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const message = formatTelegramMessage(data);
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

