import development from "../../img/development.png";
import "./HomeSection.scss";

export default function HomeSection() {
  return (
    <section className="promo" id="home-section">
      <div className="container">
        <div className="promo__block">
          <div className="promo__colum">
            <h1 className="promo__title">Заголовок страницы</h1>
            <p className="promo__text">
              Lorem ipsum dolor sit amet consectetur. Egestas quam mauris fermentum commodo posuere. Non massa ultricies
              tincidunt leo ornare. Tincidunt maecenas ultricies id in cras augue. Viverra enim ullamcorper venenatis
              molestie amet purus justo mauris elit. Commodo elit amet vitae id odio id aenean dui.
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
