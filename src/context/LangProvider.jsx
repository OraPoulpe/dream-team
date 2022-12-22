import { createContext, useReducer, useMemo } from "react";
import i18n from "../i18n";

export const LangContext = createContext();
let localLang = localStorage.getItem("lang");

if (!localLang) {
  localStorage.setItem("lang", "en");
  localLang = "en";
}

export default function LangProvider({ children }) {
  const [lang, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "TOGGLE_TO_RU":
        localStorage.setItem("lang", "ru");
        i18n.changeLanguage("ru");
        return "ru";
      case "TOGGLE_TO_EN":
        localStorage.setItem("lang", "en");
        i18n.changeLanguage("en");
        return "en";
      default:
        return state;
    }
  }, localLang);

  const memoizedValue = useMemo(() => ({ lang, dispatch }), [lang]);

  return <LangContext.Provider value={memoizedValue}>{children}</LangContext.Provider>;
}
