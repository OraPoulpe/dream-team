// Import icons
import github from "./icons/github.svg";
import telegram from "./icons/telegram.svg";

// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./SwiperSlider.scss";
import { Titles } from "../Titles/Titles";

const data = [
  {
    id: "1",
    name: "Владимир Крылов",
    profession: "Frontend developer",
    vita: "Увлечения: каяки, багги, сплавы, скалолазание, шахматы, коньки, теннис, театры, мюзиклы. Читаю фэнтези.",
    skills: ["HTML (HTML5)", "CSS (CSS3)", "SCSS/SASS", "BEM", "Styled-Components", "FSD-methodology", "FLUX|MVC|MVP-architecture", "JavaScript (ES5+)", "TypeScript (4+)", "React (17+)", "Redux (4+) [pure+ toolkit, saga, thunk]", "Storybook", "Jest + screenshot testing"],
    socials: {
      email: "krylov.dev@yandex.ru",
      github: "https://github.com/krylovDev",
      telegram: "https://t.me/krylov_dev",
    },
    photo: "https://raw.githubusercontent.com/ilrosch/dream-team/development/src/components/SwiperSlider/photo_vladimir_krylov.jpg",
  },

  {
    id: "2",
    name: "Заур Нурмагомедов",
    profession: "Frontend developer",
    vita: "Frontend-разработчик, чутка шарящий в backend. Фанат японской манги. Очень хочет прописать sudo apt-get update.",
    skills: ["HTML (HTML5)", "CSS (CSS3)", "SCSS/SASS", "JavaScript (ES6)", "React", "Redux toolkit", "MUI", "Python", "FastAPI", "Flask", "SQL", "Linux"],
    socials: {
      email: "nurmagomedoffzaur@yandex.ru",
      github: "https://github.com/mrskyguy",
      telegram: "https://t.me/skyguy",
    },
    photo: "https://raw.githubusercontent.com/ilrosch/dream-team/development/src/components/SwiperSlider/photo_nurmagomedov_zaur.jpg",
  },

  {
    id: "3",
    name: "Илья Росчихмаров",
    profession: "Frontend developer, Web-designer",
    vita: "Если сказать кратко, то я «самоучка». Знания в области веб-программирования черпал из различных книг, статей и курсов на образовательных площадках Beonmax и Freecodecamp. Закончил обучение более 2-х лет назад, но до сих пор продолжаю совершенствовать свои навыки и изучаю новые технологии. Также имею опыт в разработке веб-дизайна.",
    skills: ["HTML (HTML5)", "CSS (CSS3)", "Sass/Scss", "JavaScript", "React", "BEM", "Gulp", "Figma", "Photoshop"],
    socials: {
      email: "ilrosch@yandex.ru",
      github: "https://github.com/ilrosch/",
      telegram: "https://t.me/ilrosch",
    },
    photo: "https://raw.githubusercontent.com/ilrosch/dream-team/development/src/components/SwiperSlider/photo_Ilya_roschimarov.jpg",
  },

  {
    id: "4",
    name: "Сергей Сазонов",
    profession: "Frontend developer",
    vita: "Играю в футбол, волейбол, катаюсь на сноуборде, люблю готовить и играть в настольные игры.",
    skills: ["HTML (HTML5)", "CSS (CSS3)", "Python", "JavaScript", "React", "SQL", "Redux toolkit"],
    socials: {
      email: "ssazonov69@gmail.com",
      github: "https://github.com/OraPoulpe",
      telegram: "https://t.me/OraPoulpe",
    },
    photo: "https://raw.githubusercontent.com/ilrosch/dream-team/development/src/components/SwiperSlider/photo_sergey_sazonov.jpg",
  },
];

export const SwiperSlider = () => {
  return (
    <>
      <Titles title={"Наша команда"} subtitle={"Здесь будет текст"} />
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards, Navigation, Scrollbar, A11y]} navigation scrollbar={{ draggable: true }} className="slider">
        <SwiperSlide className="slider__wrapper">
          <div className="slider__content slider__content--first">
            <div className="slider__block slider__block--first">
              <h3>Давайте знакомиться!</h3>
            </div>
            <div className="slider__wrap">
              {data !== undefined &&
                data.map((user) => (
                  <div className="slider__card">
                    <div className="slider__photo slider__photo--small">
                      <img src={user.photo} alt="Фото" />
                    </div>
                    <h2 className="slider__title slider__title--small">{user.name}</h2>
                    <h3 className="slider__subtitle slider__subtitle--small">{user.profession}</h3>
                  </div>
                ))}
            </div>
          </div>
        </SwiperSlide>
        {data !== undefined &&
          data.map((user) => (
            <SwiperSlide key={user.id} className="slider__wrapper">
              <div className="slider__content">
                <div className="slider__block"></div>
                <div className="slider__photo">
                  <img src={user.photo} alt="Фото" />
                </div>
                <h2 className="slider__title">{user.name}</h2>
                <h3 className="slider__subtitle">{user.profession}</h3>
                <p className="slider__vita">{user.vita}</p>
                <div className="slider__skills">
                  {user.skills.map((skill) => (
                    <div className="slider__skill">
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>

                <div className="slider__contacts">
                  <a href={`mailto:${user.socials.email}`}>{user.socials.email}</a>
                  <div className="slider__social">
                    <a href={user.socials.github}>
                      <img src={github} alt="github" />
                    </a>

                    <a href={user.socials.telegram}>
                      <img src={telegram} alt="telegram" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
