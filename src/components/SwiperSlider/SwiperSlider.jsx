/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */

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
import telegram from "../../img/icons/telegram.svg";
import github from "../../img/icons/github.svg";
import Titles from "../Titles/Titles";
import team from "../../mock/team";


export default function SwiperSlider() {
  return (
    <section className="team" id="team">
      <Titles title="Наша команда" subtitle="Магистры веб-разработки" />
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
              <h3>Давайте знакомиться!</h3>
            </div>
            <div className="slider__wrap">
              {team !== undefined &&
                team.map((user) => (
                  <div className="slider__card" key={user.id}>
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

        {team !== undefined &&
          team.map((user) => (
            <SwiperSlide key={user.id} className="slider__wrapper">
              <div className="slider__content">
                <div className="slider__block" />
                <div className="slider__photo">
                  <img src={user.photo} alt="Фото" />
                </div>
                <h2 className="slider__title">{user.name}</h2>
                <h3 className="slider__subtitle">{user.profession}</h3>
                <p className="slider__vita">{user.vita}</p>
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
