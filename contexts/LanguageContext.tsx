"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ru" | "kz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    "nav.features": "Преимущества",
    "nav.cases": "Кейсы",
    "nav.configurator": "Конфигуратор",
    "nav.catalog": "Каталог",
    "nav.about": "О компании",
    "nav.contact": "Контакты",
    
    // Hero
    "hero.badge": "Премиальные решения для умного дома",
    "hero.title1": "Умный дом",
    "hero.title2": "нового поколения",
    "hero.description": "Автоматизируйте свой дом с помощью передовых технологий. Управляйте освещением, климатом, безопасностью и развлечениями одним касанием.",
    "hero.button1": "Создать проект",
    "hero.button2": "Узнать больше",
    "hero.stats1": "Установленных систем",
    "hero.stats2": "Довольных клиентов",
    "hero.stats3": "Техническая поддержка",
    
    // Features
    "features.badge": "Возможности",
    "features.title": "Преимущества системы",
    "features.description": "Все, что нужно для комфортной и безопасной жизни в современном доме",
    
    // Cases
    "cases.badge": "Проекты",
    "cases.title": "Реализованные проекты",
    "cases.description": "Посмотрите, как мы преобразили дома наших клиентов",
    
    // Configurator
    "config.badge": "Конфигуратор",
    "config.title": "Создайте свой умный дом",
    "config.description": "Выберите параметры и получите персональное предложение",
    "config.step1": "Тариф",
    "config.step2": "Помещение",
    "config.step3": "Зоны",
    "config.step4": "Элементы",
    "config.tariff.title": "Выберите тариф",
    "config.premise.title": "Тип помещения",
    "config.zones.title": "Количество зон (комнат)",
    "config.zones.label": "Количество зон",
    "config.zones.continue": "Продолжить",
    "config.zones.additional": "Дополнительно",
    "config.devices.title": "Дополнительные элементы",
    "config.devices.selected": "Выбрано элементов",
    "config.devices.additional": "Дополнительно",
    "config.summary.total": "Итоговая стоимость",
    "config.summary.house": "Ваш умный дом оживает в реальном времени",
    "config.order": "Оформить заказ",
    "config.back": "Назад",
    "config.next": "Далее",
    
    // Contact
    "contact.badge": "Контакты",
    "contact.title": "Свяжитесь с нами",
    "contact.description": "Оставьте заявку, и мы свяжемся с вами в ближайшее время",
    "contact.name": "Имя",
    "contact.phone": "Телефон",
    "contact.city": "Город",
    "contact.city.placeholder": "Введите ваш город",
    "contact.message": "Сообщение",
    "contact.send": "Отправить заявку",
    "contact.sending": "Отправка...",
    "contact.success": "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
    "contact.error": "Ошибка отправки. Пожалуйста, попробуйте еще раз.",
    "contact.address": "Адрес",
    "contact.address.value": "г. Алматы, ул. Абая, д. 150",
    
    // Catalog
    "catalog.badge": "Каталог",
    "catalog.title": "Каталог товаров",
    "catalog.description": "Выберите умные устройства для вашего дома",
    "catalog.search": "Поиск товаров...",
    "catalog.all": "Все",
    "catalog.select": "Выбрать",
    "catalog.notFound": "Товары не найдены",
    "catalog.notFoundDesc": "Попробуйте изменить параметры поиска",
    
    // About
    "about.badge": "О компании",
    "about.title": "О компании Умный Макс",
    "about.description": "Мы создаем умные дома нового поколения, объединяя передовые технологии с комфортом и безопасностью",
    "about.mission": "Наша миссия",
    "about.mission.text1": "Умный Макс — это команда профессионалов, которая превращает обычные дома в интеллектуальные пространства. Мы верим, что технологии должны делать жизнь проще, безопаснее и комфортнее.",
    "about.mission.text2": "С 2014 года мы устанавливаем системы умного дома в Алматы и по всему Казахстану. Наш опыт и знания позволяют создавать решения, которые идеально подходят каждому клиенту.",
    "about.quality": "Премиум качество",
    "about.quality.text": "Мы работаем только с проверенными производителями и используем оборудование премиум-класса, которое прослужит вам долгие годы.",
    "about.values": "Наши ценности",
    "about.values.reliability": "Надежность",
    "about.values.reliability.desc": "Мы используем только проверенное оборудование от ведущих производителей",
    "about.values.innovation": "Инновации",
    "about.values.innovation.desc": "Постоянно следим за новыми технологиями и внедряем их в наши решения",
    "about.values.individual": "Индивидуальный подход",
    "about.values.individual.desc": "Каждый проект разрабатывается с учетом особенностей вашего дома",
    "about.values.speed": "Скорость",
    "about.values.speed.desc": "Быстрая установка и настройка системы без лишних хлопот",
    "about.team": "Наша команда",
    "about.stats.years": "Лет на рынке",
    "about.cta.title": "Готовы начать?",
    "about.cta.description": "Свяжитесь с нами, и мы создадим умный дом вашей мечты",
    "about.cta.button": "Связаться с нами",
  },
  kz: {
    // Navigation
    "nav.features": "Артықшылықтар",
    "nav.cases": "Жобалар",
    "nav.configurator": "Конфигуратор",
    "nav.catalog": "Каталог",
    "nav.about": "Компания туралы",
    "nav.contact": "Байланыс",
    
    // Hero
    "hero.badge": "Ақылды үй үшін премиум шешімдер",
    "hero.title1": "Ақылды үй",
    "hero.title2": "жаңа буын",
    "hero.description": "Алдыңғы технологиялардың көмегімен үйіңізді автоматтандырыңыз. Жанармайды, климатты, қауіпсіздікті және ойын-сауықты бір басумен басқарыңыз.",
    "hero.button1": "Жоба жасау",
    "hero.button2": "Көбірек білу",
    "hero.stats1": "Орнатылған жүйелер",
    "hero.stats2": "Қанағаттанған клиенттер",
    "hero.stats3": "Техникалық қолдау",
    
    // Features
    "features.badge": "Мүмкіндіктер",
    "features.title": "Жүйенің артықшылықтары",
    "features.description": "Заманауи үйде қолайлы және қауіпсіз өмір сүру үшін қажеттінің бәрі",
    
    // Cases
    "cases.badge": "Жобалар",
    "cases.title": "Іске асырылған жобалар",
    "cases.description": "Біздің клиенттердің үйлерін қалай өзгерткенімізді көріңіз",
    
    // Configurator
    "config.badge": "Конфигуратор",
    "config.title": "Өз ақылды үйіңізді жасаңыз",
    "config.description": "Параметрлерді таңдап, жеке ұсыныс алыңыз",
    "config.step1": "Тариф",
    "config.step2": "Бөлме",
    "config.step3": "Аудандар",
    "config.step4": "Элементтер",
    "config.tariff.title": "Тарифті таңдаңыз",
    "config.premise.title": "Бөлме түрі",
    "config.zones.title": "Аудандар саны (бөлмелер)",
    "config.zones.label": "Аудандар саны",
    "config.zones.continue": "Жалғастыру",
    "config.zones.additional": "Қосымша",
    "config.devices.title": "Қосымша элементтер",
    "config.devices.description": "Ақылды үйіңізге құрылғылар мен жүйелерді таңдаңыз",
    "config.devices.selected": "Таңдалған элементтер",
    "config.devices.additional": "Қосымша",
    "config.summary.total": "Жалпы құны",
    "config.summary.house": "Сіздің ақылды үйіңіз нақты уақытта тіріленеді",
    "config.order": "Тапсырыс беру",
    "config.back": "Артқа",
    "config.next": "Келесі",
    
    // Contact
    "contact.badge": "Байланыс",
    "contact.title": "Бізбен байланысыңыз",
    "contact.description": "Өтініш қалдырыңыз, біз сізбен жақын арада байланысамыз",
    "contact.name": "Аты",
    "contact.phone": "Телефон",
    "contact.city": "Қала",
    "contact.city.placeholder": "Қалаңызды енгізіңіз",
    "contact.message": "Хабарлама",
    "contact.send": "Өтініш жіберу",
    "contact.sending": "Жіберілуде...",
    "contact.success": "Өтініш жіберілді! Біз сізбен жақын арада байланысамыз.",
    "contact.error": "Жіберу қатесі. Қайталап көріңіз.",
    "contact.address": "Мекенжай",
    "contact.address.value": "Алматы қ., Абай көш., 150 үй",
    
    // Catalog
    "catalog.badge": "Каталог",
    "catalog.title": "Тауарлар каталогы",
    "catalog.description": "Үйіңізге ақылды құрылғыларды таңдаңыз",
    "catalog.search": "Тауарларды іздеу...",
    "catalog.all": "Барлығы",
    "catalog.select": "Таңдау",
    "catalog.notFound": "Тауарлар табылмады",
    "catalog.notFoundDesc": "Іздеу параметрлерін өзгертіп көріңіз",
    
    // About
    "about.badge": "Компания туралы",
    "about.title": "Ақылды Макс компаниясы туралы",
    "about.description": "Біз алдыңғы технологияларды қолайлылық пен қауіпсіздікпен біріктіре отырып, жаңа буынның ақылды үйлерін жасаймыз",
    "about.mission": "Біздің миссия",
    "about.mission.text1": "Ақылды Макс - бұл кәдімгі үйлерді интеллектуалды кеңістіктерге айналдыратын кәсіби команда. Біз технологиялар өмірді оңайлатуы, қауіпсіздікті және қолайлылықты қамтамасыз етуі керек деп сенеміз.",
    "about.mission.text2": "2014 жылдан бастап біз Алматыда және Қазақстан бойынша ақылды үй жүйелерін орнатамыз. Біздің тәжірибе мен білім әрбір клиентке мінсіз сәйкес келетін шешімдерді жасауға мүмкіндік береді.",
    "about.quality": "Премиум сапа",
    "about.quality.text": "Біз тек тексерілген өндірушілермен жұмыс істейміз және сізге ұзақ жылдар бойы қызмет ететін премиум-класс жабдықтарды пайдаланамыз.",
    "about.values": "Біздің құндылықтар",
    "about.values.reliability": "Сенімділік",
    "about.values.reliability.desc": "Біз тек жетекші өндірушілердің тексерілген жабдықтарын қолданамыз",
    "about.values.innovation": "Инновациялар",
    "about.values.innovation.desc": "Жаңа технологияларды үнемі бақылап, оларды біздің шешімдерге енгіземіз",
    "about.values.individual": "Жеке тәсіл",
    "about.values.individual.desc": "Әрбір жоба үйіңіздің ерекшеліктерін ескере отырып әзірленеді",
    "about.values.speed": "Жылдамдық",
    "about.values.speed.desc": "Артық алаңдаусыз жүйені жылдам орнату және баптау",
    "about.team": "Біздің команда",
    "about.stats.years": "Нарықтағы жылдар",
    "about.cta.title": "Бастауға дайынсыз ба?",
    "about.cta.description": "Бізбен байланысыңыз, біз сіздің армандағы ақылды үйіңізді жасаймыз",
    "about.cta.button": "Бізбен байланысыңыз",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru");

  useEffect(() => {
    // Загружаем сохраненный язык из localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "kz")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

