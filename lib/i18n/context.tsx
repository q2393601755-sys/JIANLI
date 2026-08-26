"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, TranslationKey } from "./translations";
import { BilingualText } from "@/lib/types";

type Language = "zh" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
  bt: (text: BilingualText) => string;
  isZh: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "zh" || saved === "en") {
      setLangState(saved);
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang === "zh" ? "zh-CN" : "en";
  };

  const toggleLang = () => setLang(lang === "zh" ? "en" : "zh");

  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] ?? key;
  };

  const bt = (text: BilingualText): string => {
    return text[lang] ?? text.zh;
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t, bt, isZh: lang === "zh" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
