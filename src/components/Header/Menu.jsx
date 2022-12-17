import { useEffect } from "react";
import classNames from "classnames";

export default function Menu({ menuSettings }) {
    const { isMenuOpened, setIsMenuOpened } = menuSettings;

    // При клике вне меню, меню закрывается
    useEffect(() => {
        function handleClickOutside(event) {
            if (!isMenuOpened) return

            const menuBlock = document.querySelector(".header__menu")
            const burger = document.querySelector(".header__burger")
            if (!event.path.includes(menuBlock) && !event.path.includes(burger)) {
                setIsMenuOpened(false)
            }
        }

        document.addEventListener('click', handleClickOutside, false)
    })

    return (
        <div
            className={classNames("header__menu", { open: isMenuOpened })}
        >
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#team" onClick={() => setIsMenuOpened(false)}>Наша команда</a>
                </li>
                <li className="menu__item">
                    <a href="#contact" onClick={() => setIsMenuOpened(false)}>Связаться</a>
                </li>
                <li className="menu__item">
                    <a href="#fav-places" onClick={() => setIsMenuOpened(false)}>Любимые места</a>
                </li>
                <li className="menu__item">
                    <a href="#projects" onClick={() => setIsMenuOpened(false)}>Проекты</a>
                </li>
            </ul>
        </div>
    );
}
