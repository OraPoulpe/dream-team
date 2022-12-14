import { useState } from 'react'
import classNames from 'classnames'


export default function Burger() {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <div
      className={
        classNames(
          'header__burger',
          { open: isMenuOpened }
        )
      }
      onClick={() => setIsMenuOpened(prevState => !prevState)}
    >
      <div className="burger__bar1" />
      <div className="burger__bar2" />
      <div className="burger__bar3" />
    </div>
  )
}
