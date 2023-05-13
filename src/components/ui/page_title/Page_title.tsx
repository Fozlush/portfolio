import { FC } from "react"
import style from './page_title.module.scss'

interface IPageTitle {
  text: string
}

const PageTitle: FC<IPageTitle> = ({text}) => {
  return (
    <h2 className={style.h2}>
      {text}
    </h2>
  )
}

export default PageTitle