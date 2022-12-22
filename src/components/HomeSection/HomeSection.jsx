import { useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../context/ThemeProvider";
import development from "../../img/development.png";
import "./HomeSection.scss";

export default function HomeSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={classNames("promo", { dark: theme === "dark" })} id="home-section">
      <div className="container">
        <div className="promo__block">
          <div className="promo__colum">
            <h1 className="promo__title">Привет, мы команда DreamTeam</h1>
            <p className="promo__text">
              Мы ученики старших классов. Мы живем в разных уголках России, но всех нас объединяет любовь к
              программированию и Frontend-разработке
            </p>
            <a href="#team">
              <button type="button" className="promo__button">
                Подробнее о нас
              </button>
            </a>
          </div>
          <div className="promo__colum">
            <img src={development} alt="Разработка сайта под ключ" />
          </div>
        </div>
      </div>
    </section>
  );
}
