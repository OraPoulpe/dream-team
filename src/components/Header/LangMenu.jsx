import { useContext, useEffect } from "react";
import classNames from "classnames";

import { LangContext } from "../../context/LangProvider";

export default function LangMenu({ langMenuSettings }) {
  const { isLangMenuOpened, setIsLangMenuOpened } = langMenuSettings;
  const { lang, dispatch } = useContext(LangContext);

  // При клике вне меню, меню закрывается
  useEffect(() => {
    function handleClickOutside(event) {
      if (!isLangMenuOpened) return;

      const langMenuBlock = document.querySelector(".header__lang-menu");
      const toggler = document.querySelector(".tools__toggle-language");
      if (!event.path.includes(langMenuBlock) && !event.path.includes(toggler)) {
        setIsLangMenuOpened(false);
      }
    }

    document.addEventListener("click", handleClickOutside, false);
  });

  return (
    <div className={classNames("header__lang-menu", { open: isLangMenuOpened })}>
      <ul className="lang-menu__list">
        <li className="lang-menu__item">
          <button
            className="lang-menu__item-btn"
            onClick={() => {
              if (lang !== "ru") dispatch({ type: "TOGGLE_TO_RU" });
              setIsLangMenuOpened(false);
            }}
            type="button"
          >
            Русский
          </button>
        </li>
        <li className="lang-menu__item">
          <button
            className="lang-menu__item-btn"
            onClick={() => {
              if (lang !== "en") dispatch({ type: "TOGGLE_TO_EN" });
              setIsLangMenuOpened(false);
            }}
            type="button"
          >
            English
          </button>
        </li>
      </ul>
    </div>
  );
}
