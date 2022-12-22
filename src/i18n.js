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
                    Главная: "Home",
                    Проекты: "Projects",
                    "Наша команда": "Our team",
                    "Любимые места": "Favorite places",
                    Связаться: "Contact us",
                    "Магистры веб-разработки": "Masters of web development",
                    "Давайте знакомиться!": "Let's get acquainted!",
                    Фото: "Photo",
                    "Владимир Крылов": "Vladimir Krylov",
                    "Заур Нурмагомедов": "Zaur Nurmagomedov",
                    "Илья Росчихмаров": "Ilya Roschikhmarov",
                    "Сергей Сазонов": "Sergey Sazonov",
                    "Frontend-разработчик": "Frontend developer",
                    "Увлечения: каяки, багги, сплавы, скалолазание, шахматы, коньки, теннис, театры, мюзиклы. Читаю фэнтези.":
                        "Hobbies: kayaks, buggies, rafting, rock climbing, chess, roller skates, tennis, theaters, musicals. I read fantasy.",
                    "Frontend-разработчик, чутка шарящий в backend. Фанат японской манги. Очень хочет прописать sudo apt-get update.":
                        "Frontend developer, a little bit of backend. A fan of Japanese manga. Really wants to write sudo apt-get update.",
                    "Если сказать кратко, то я «самоучка». Знания в области веб-программирования черпал из различных книг, статей и курсов на образовательных площадках Beonmax и Freecodecamp. Закончил обучение более 2-х лет назад, но до сих пор продолжаю совершенствовать свои навыки и изучаю новые технологии. Также имею опыт в разработке веб-дизайна.":
                        "If say briefly, then I am a self-taught person. Knowledge in the field of web programming I got from various books, articles and courses on educational platforms Beonmax and Freecodecamp. I finished my education more than 2 years ago, but I still continue to improve my skills and learn new technologies. I also have experience in web design development.",
                    "Играю в футбол, волейбол, катаюсь на сноуборде, люблю готовить и играть в настольные игры.":
                        "I play football, volleyball, ride a snowboard, love to cook and play board games.",
                },
            },
            ru: {
                translation: {
                    "Привет, мы команда DreamTeam": "Привет, мы команда DreamTeam",
                    "Мы ученики старших классов. Мы живем в разных уголках России, но всех нас объединяет любовь кпрограммированию и Frontend-разработке":
                        "Мы ученики старших классов. Мы живем в разных уголках России, но всех нас объединяет любовь кпрограммированию и Frontend-разработке",
                    "Подробнее о нас": "Подробнее о нас",
                    Главная: "Главная",
                    Проекты: "Проекты",
                    "Наша команда": "Наша команда",
                    "Любимые места": "Любимые места",
                    Связаться: "Связаться",
                    "Магистры веб-разработки": "Магистры веб-разработки",
                    "Давайте знакомиться!": "Давайте знакомиться!",
                    Фото: "Фото",
                    "Владимир Крылов": "Владимир Крылов",
                    "Заур Нурмагомедов": "Заур Нурмагомедов",
                    "Илья Росчихмаров": "Илья Росчихмаров",
                    "Сергей Сазонов": "Сергей Сазонов",
                    "Frontend-разработчик": "Frontend-разработчик",
                    "Увлечения: каяки, багги, сплавы, скалолазание, шахматы, коньки, теннис, театры, мюзиклы. Читаю фэнтези.":
                        "Увлечения: каяки, багги, сплавы, скалолазание, шахматы, коньки, теннис, театры, мюзиклы. Читаю фэнтези.",
                    "Играю в футбол, волейбол, катаюсь на сноуборде, люблю готовить и играть в настольные игры.":
                        "Играю в футбол, волейбол, катаюсь на сноуборде, люблю готовить и играть в настольные игры.",
                    "Frontend-разработчик, чутка шарящий в backend. Фанат японской манги. Очень хочет прописать sudo apt-get update.":
                        "Frontend-разработчик, чутка шарящий в backend. Фанат японской манги. Очень хочет прописать sudo apt-get update.",
                    "Если сказать кратко, то я «самоучка». Знания в области веб-программирования черпал из различных книг, статей и курсов на образовательных площадках Beonmax и Freecodecamp. Закончил обучение более 2-х лет назад, но до сих пор продолжаю совершенствовать свои навыки и изучаю новые технологии. Также имею опыт в разработке веб-дизайна.":
                        "Если сказать кратко, то я «самоучка». Знания в области веб-программирования черпал из различных книг, статей и курсов на образовательных площадках Beonmax и Freecodecamp. Закончил обучение более 2-х лет назад, но до сих пор продолжаю совершенствовать свои навыки и изучаю новые технологии. Также имею опыт в разработке веб-дизайна.",
                },
            },
        },
    });

export default i18n;
