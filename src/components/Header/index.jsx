import { useState } from 'react'

import Burger from './Burger'
import './index.scss'
import Menu from './Menu'
import Theme from './togglers/Theme'


export default function Header() {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    return (<>
        <header className="header">
            <div className="container">
                <Burger menuSettings={{ isMenuOpened, setIsMenuOpened }} />
                <div className="header__title">
                    <h1><a href="/">teamFrame</a></h1>
                </div>
                <div className="header__tools">
                    {/* <div className="tools__toggle-theme">
                        <span>th</span>
                    </div> */}
                    <Theme />
                    <div className="tools__toggle-lang">
                        <span>la</span>
                    </div>
                </div>
                <Menu menuSettings={{ isMenuOpened, setIsMenuOpened }} />
            </div>
        </header>
    </>)
}
