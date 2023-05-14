import { FC } from "react"
import { Link } from "react-router-dom";
import links from "./links";
import style from './menu.module.scss'

const Menu: FC = () => {
  return (
    <menu className={style.menu}>
      <nav className={style.navigation}>
        <ul>
          {links.map((data) => {
            return <li key={data.route}><Link to={data.route}>{data.text}</Link></li>
          })}
        </ul>
      </nav>
    </menu>
  )
}

export default Menu