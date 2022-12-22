/* eslint-disable max-len */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: localStorage.getItem("lang") || "ru",
        debug: true,

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: {
                translation: {
                    "Привет, мы команда DreamTeam": "Hello, we are DreamTeam team",
                    "Мы ученики старших классов. Мы живем в разных уголках России, но всех нас объединяет любовь кпрограммированию и Frontend-разработке":
                        "We are students of higher classes. We live in different corners of Russia, but we are all united by our love for programming and Frontend development",
                    "Подробнее о нас": "More about us",
                    "Главная": "Home",
                    "Проекты": "Projects",
                    "Наша команда": "Our team",
                    "Любимые места": "Favorite places",
                    "Связаться": "Contact us",
                },
            },
            ru: {
                translation: {
                    "Привет, мы команда DreamTeam": "Привет, мы команда DreamTeam",
                    "Мы ученики старших классов. Мы живем в разных уголках России, но всех нас объединяет любовь кпрограммированию и Frontend-разработке":
                        "Мы ученики старших классов. Мы живем в разных уголках России, но всех нас объединяет любовь кпрограммированию и Frontend-разработке",
                    "Подробнее о нас": "Подробнее о нас",
                    "Главная": "Главная",
                    "Проекты": "Проекты",
                    "Наша команда": "Наша команда",
                    "Любимые места": "Любимые места",
                    "Связаться": "Связаться",
                },
            },
        },
    });

export default i18n;
