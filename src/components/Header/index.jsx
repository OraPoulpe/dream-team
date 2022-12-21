import { useState } from "react";
import { Link } from "react-router-dom";

import Burger from "./Burger";
import "./index.scss";
import Menu from "./Menu";
import LangMenu from "./LangMenu";
import Theme from "./togglers/Theme";
import Language from "./togglers/Language";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isLangMenuOpened, setIsLangMenuOpened] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <Burger menuSettings={{ isMenuOpened, setIsMenuOpened }} />
          <h1 className="header__title"><Link to="/">DreamTeam</Link></h1>
          <div className="header__tools">
            <Theme />
            <Language langMenuSettings={{ isLangMenuOpened, setIsLangMenuOpened }} />
          </div>
        </div>
      </header>
      <div className="header__menus">
        <div className="container">
          <Menu menuSettings={{ isMenuOpened, setIsMenuOpened }} />
          <LangMenu langMenuSettings={{ isLangMenuOpened, setIsLangMenuOpened }} />
        </div>
      </div>
    </>
  );
}
