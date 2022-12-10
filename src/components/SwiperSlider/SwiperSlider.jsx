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

import "./SwiperSlider.css";

const data = [
  {
    id: "1",
    name: "Иван Иванов",
    profession: "Frontend developer",
    vita: "Lorem ipsum dolor sit amet consectetur. Egestas quam mauris fermentum commodo posuere. Non massa ultricies tincidunt leo ornare. Tincidunt maecenas ultricies id in cras augue. Viverra enim ullamcorper venenatis molestie amet purus justo mauris elit. Commodo elit amet vitae id odio id aenean dui.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    socials: {
      github: "link",
      telegram: "link",
    },
    photo: "link",
  },

  {
    id: "2",
    name: "Иван Иванов",
    profession: "Frontend developer",
    vita: "Lorem ipsum dolor sit amet consectetur. Egestas quam mauris fermentum commodo posuere. Non massa ultricies tincidunt leo ornare. Tincidunt maecenas ultricies id in cras augue. Viverra enim ullamcorper venenatis molestie amet purus justo mauris elit. Commodo elit amet vitae id odio id aenean dui.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    socials: {
      github: "link",
      telegram: "link",
    },
    photo: "link",
  },

  {
    id: "3",
    name: "Иван Иванов",
    profession: "Frontend developer",
    vita: "Lorem ipsum dolor sit amet consectetur. Egestas quam mauris fermentum commodo posuere. Non massa ultricies tincidunt leo ornare. Tincidunt maecenas ultricies id in cras augue. Viverra enim ullamcorper venenatis molestie amet purus justo mauris elit. Commodo elit amet vitae id odio id aenean dui.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    socials: {
      github: "link",
      telegram: "link",
    },
    photo: "link",
  },
];

export const SwiperSlider = () => {
  return (
    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards, Navigation, Scrollbar, A11y]} navigation scrollbar={{ draggable: true }} initialSlide={1} className="slider">
      {data.map((user) => (
        <SwiperSlide key={user.id} className="slider__wrapper">
          <div className="slider__content">
            <div className="slider__colum">
              <div className="slider__round">
                <img src={user.photo} />
              </div>
              <div className="slider__social">
                <a href={user.socials.github}>
                  <img src={github} alt="" />
                </a>
                <a href={user.socials.telegram}>
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div className="slider__colum">
              <h2 className="slider__title">{user.name}</h2>
              <h3 className="slider__subtitle">{user.profession}</h3>
              <p className="slider__text">{user.vita}</p>

              <div className="slider__skills">
                {user.skills.map((skill) => (
                  <div className="slider__skill">
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
