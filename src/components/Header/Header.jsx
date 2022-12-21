import { useState } from "react";

import Burger from "./Burger";
import "./index.scss";
import Menu from "./Menu";
import Theme from "./togglers/Theme";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <a href="/">
            <h1>Dream-team</h1>
          </a>
        </div>
        <div className="header__block">
          <div className="header__tools">
            {/* <div className="tools__toggle-theme">
                        <span>th</span>
                    </div> */}
            <Theme />
            <div className="tools__toggle-lang">
              <span>ENG</span>
            </div>
          </div>

          <Menu menuSettings={{ isMenuOpened, setIsMenuOpened }} />
          <Burger menuSettings={{ isMenuOpened, setIsMenuOpened }} />
        </div>
      </div>
    </header>
  );
}
