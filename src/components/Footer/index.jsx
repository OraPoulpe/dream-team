import './index.scss';

import birdImg from '../../img/bird.png';
import appDevelopment from '../../img/appDevelopment.png';

function getMinutes(milliseconds) {
    return Math.floor(milliseconds / 60000);
}


export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__about">
                <img src={birdImg} alt="bird" className="about__bird-img" />
                <div className="about__content">
                    <h2 className="about__title">DreamTeam</h2>
                    <p className="about__start">
                        Отсчет с момента запуска проекта: { getMinutes(new Date() - new Date(2022, 11, 7, 17, 21)) } мин
                    </p>
                    <p className="about__text">
                        Lorem ipsum dolor sit amet consectetur. Risus nunc sit tristique fringilla. Sit sagittis interdum bibendum odio elit quis eu proin. Vitae gravida pellentesque interdum lobortis habitasse at nunc.
                    </p>
                    <button className="about__contact-btn">
                        Связаться
                    </button>
                    <p className="about__copyright">
                        <span className="copyright__info">&copy; 2022 DreamTeam</span>
                        <span className="copyright__plea">
                            Не забудьте поставить звездочку на нашем <a href="https://github.com/krylovDev/dream-team/" target="_blank" rel="noreferrer">GitHub</a>
                        </span>
                    </p>
                </div>
            </section>
            <section className="footer__navigation">
                <h2 className="navigation__title">Навигация по сайту</h2>
                <nav className="navigation__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#top">Главная</a></li>
                        <li className="nav__item"><a href="#projects">Проекты</a></li>
                        <li className="nav__item"><a href="#team">Команда</a></li>
                        <li className="nav__item"><a href="#fav-places">Любимые места</a></li>
                    </ul>
                </nav>
            </section>
            <img src={appDevelopment} alt="appDevelopment" className="footer__illustration" />
        </footer>
    );
}
