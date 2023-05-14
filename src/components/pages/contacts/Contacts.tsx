import { FC } from "react"
import { PageTitle } from "../../ui"
import contacts_list from '../../../lib/contacts_list'
import style from './contacts.module.scss'

const ContactsPage: FC = () => {
  return (
    <div>
      <PageTitle text='Как со мной связаться'></PageTitle>
      <ul className={style.list}>
        {contacts_list.map((data) => {
          return (
            <a href={data.link} key={data.id} className={style.block} target="blank">
              <li>
                <img src={data.img} className={style.logo}></img>
                <p className={style.text}>{data.name}</p>
              </li>
            </a>
          )
        })}
      </ul>
    </div>
  )
}

export default ContactsPage