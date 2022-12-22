/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */

// Import Swiper React components
import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, EffectCards } from "swiper";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { ThemeContext } from "../../context/ThemeProvider";
import telegram from "../../img/icons/telegram.svg";
import github from "../../img/icons/github.svg";
import Titles from "../Titles/Titles";
import team from "../../mock/team";
import Loader from "../Loader/Loader";
import "./SwiperSlider.scss";

export default function SwiperSlider() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [teams, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(team);
    }, 1000);
  }, []);

  return (
    <section className={classNames("team", { dark: theme === "dark" })} id="team">
      <Titles title={t("Наша команда")} subtitle={t("Магистры веб-разработки")} />
      <Swiper
        effect="cards"
        grabCursor
        modules={[EffectCards, Navigation, Scrollbar, A11y]}
        navigation
        scrollbar={{ draggable: true }}
        className="slider"
      >
        <SwiperSlide className="slider__wrapper">
          <div className="slider__content slider__content--first">
            <div className="slider__block slider__block--first">
              <h3>{t("Давайте знакомиться!")}</h3>
            </div>
            <div className="slider__wrap">
              {teams.length === 0 ? (
                <Loader />
              ) : (
                teams !== undefined &&
                teams.map((user) => (
                  <div className="slider__card" key={user.id}>
                    <div className="slider__photo slider__photo--small">
                      <img src={user.photo} alt={t("Фото")} />
                    </div>
                    <h2 className="slider__title slider__title--small">{t(user.name)}</h2>
                    <h3 className="slider__subtitle slider__subtitle--small">{t(user.profession)}</h3>
                  </div>
                ))
              )}
            </div>
          </div>
        </SwiperSlide>

        {teams !== undefined &&
          teams.map((user) => (
            <SwiperSlide key={user.id} className="slider__wrapper">
              <div className="slider__content">
                <div className="slider__block" />
                <div className="slider__photo">
                  <img src={user.photo} alt={t("Фото")} />
                </div>
                <h2 className="slider__title">{t(user.name)}</h2>
                <h3 className="slider__subtitle">{t(user.profession)}</h3>
                <p className="slider__vita">{t(user.vita)}</p>
                <div className="slider__skills">
                  {user.skills.map((skill) => (
                    <div className="slider__skill" key={skill}>
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
    </section>
  );
}
