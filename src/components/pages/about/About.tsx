import { FC } from "react"
import style from './about.module.scss'

const AboutPage: FC = () => {
  return (
    <div>
      <p className={style.greetings}>Привет, давай знакомиться, я -</p>
      <p className={style.name}><span>Я</span>рослав <span>К</span>лещев</p>
      <p className={style.profession}><span>frontend</span> разработчик</p>
      <p className={style.description}>Свой первый hello world написал в апреле 2021. К сегодняшнему дню закончил курс frontend разработчика от NordicIT, написал с десяток самостоятельных проектов, получил опыт коммерческой разработки.</p>
      <p className={style.experience}>июль 2022 - март 2023 frontend разработчик в команде билинга AMOCRM</p>
      <p className={style.technology}>Мой стэк технологий: HTML, SCSS, JS, jquery, React, Redux, Underscore, Backbone, npm/yarn, Git</p>
    </div>
  )
}

export default AboutPage