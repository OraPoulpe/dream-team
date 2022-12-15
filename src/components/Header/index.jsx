import Burger from './Burger'
import './index.scss'


export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Burger />
                <div className="header__title">
                    <h1>teamFrame</h1>
                </div>
                <div className="header__tools">
                    <div className="tools__toggle-theme">
                        <span>th</span>
                    </div>
                    <div className="tools__toggle-lang">
                        <span>la</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
