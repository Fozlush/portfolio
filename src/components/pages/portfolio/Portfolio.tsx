import { FC } from "react"
import { PageTitle } from "../../ui"
import portfolio_list from '../../../lib/portfolio_list'
import style from './portfolio.module.scss'

const PortfolioPage: FC = () => {
  return (
    <div>
      <PageTitle text="Мои работы"></PageTitle>
      <ul>
        {portfolio_list.map((data) => {
          return (
            <li key={data.id} className={style.block}>
              <div className={style.image_block}>
                <img src={data.image}></img>
              </div>
              <div className={style.text_block}>
                <p className={style.name}>{data.name}</p>
                <p className={style.description}>{data.description}</p>
                <p className={style.technology}>Технологии:{data.technology.map((tech, index) => {
                  return <span key={index}>{tech}</span>
                })}</p>
                <div className={style.footer}>
                  <p className={style.date}>{data.date}</p>
                  <a href={data.repository} target="blank">Репозиторий</a>
                  <a href={data.link} target="blank">Перейти</a>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PortfolioPage