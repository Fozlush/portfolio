import { FC } from "react"
import { Link } from "react-router-dom";
import links from "./links";
import style from './menu.module.scss'

const Menu: FC = () => {
  return (
    <menu className={style.menu}>
      <div className={style.top}>
        <span className={style.logo}>Я</span>
        <span className={style.logo}>F</span>
      </div>
      <nav className={style.navigation}>
        <ul>
          {links.map((data) => {
            return <li key={data.route}><Link to={data.route}>{data.text}</Link></li>
          })}
        </ul>
      </nav>
      <div className={style.social}></div>
    </menu>
  )
}

export default Menu