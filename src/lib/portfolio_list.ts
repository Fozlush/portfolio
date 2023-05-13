import { chatImg, freebieCoffeeImg, hungryPeopleImg, JSArrayImg, konstructImg, sapperImg, ticketFilterImg, ToDoListImg } from '../assets/image'

const portfolio_list = [
  {
    id: 1,
    name: 'Konstruct',
    technology: ['HTML', 'SCSS'],
    description: 'Моя первая работа в рамках изучения frontend разработки. Данная работа представляет собой адаптивную вертску по бесплатному макету сайта. JS полностью отсутсвует',
    image: konstructImg,
    date: 'май 2021',
    link: 'https://fozlush.github.io/web-practice1/',
    repository: 'https://github.com/Fozlush/web-practice1'
  },
  {
    id: 2,
    name: 'Hungry people',
    technology: ['HTML', 'SCSS', 'JS', 'Jquery'],
    description: 'Вторая работа по верстке сайтов. Первая проба js и jquery в своих проектах',
    image: hungryPeopleImg,
    date: 'июль 2021',
    link: 'https://fozlush.github.io/web-practice2/',
    repository: 'https://github.com/Fozlush/web-practice2'
  },
  {
    id: 3,
    name: 'Freebie coffee',
    technology: ['HTML', 'SCSS', 'JS', 'Jquery'],
    description: 'Закрепляющая работа по верстке и jquery',
    image: freebieCoffeeImg,
    date: 'август 2021',
    link: 'https://fozlush.github.io/web-practice3/',
    repository: 'https://github.com/Fozlush/web-practice3'
  },
  {
    id: 4,
    name: 'Учебная работа с массивами',
    technology: ['HTML', 'SCSS', 'JS'],
    description: 'Работа по осваиванию js, а именно манипуляция с DOM деревом и массивами',
    image: JSArrayImg,
    date: 'декабрь 2022',
    link: 'https://fozlush.github.io/JS-array/',
    repository: 'https://github.com/Fozlush/JS-array'
  },
  {
    id: 5,
    name: 'ToDo лист',
    technology: ['HTML', 'SCSS', 'JS'],
    description: 'Закрепление знаний по js: слушатели событий, работа с массивами, работа с DOM деревом, работа с localStorage',
    image: ToDoListImg,
    date: 'март 2022',
    link: 'https://fozlush.github.io/ToDo-list/',
    repository: 'https://github.com/Fozlush/ToDo-list'
  },
  {
    id: 6,
    name: 'Игра сапёр',
    technology: ['HTML', 'SCSS', 'JS', 'React'],
    description: 'Первый проект на React. практика использования рекурсии и таймера в js',
    image: sapperImg,
    date: 'май 2022',
    link: 'https://sapper-sable-six.vercel.app/',
    repository: 'https://github.com/Fozlush/Sapper'
  },
  {
    id: 7,
    name: 'Фильтр авиабилетов',
    technology: ['HTML', 'SCSS', 'JS', 'React'],
    description: 'Фильтр авиабилетов на React',
    image: ticketFilterImg,
    date: 'май 2022',
    link: 'https://tickets-filter.vercel.app/',
    repository: 'https://github.com/Fozlush/Tickets-Filter'
  },
  {
    id: 8,
    name: 'Реалтайм чат',
    technology: ['HTML', 'SCSS', 'JS', 'React', 'Firebase'],
    description: 'Проект на реакт в котором вперые реализовал авторизацию пользователей. Работа с api firebase',
    image: chatImg,
    date: 'июнь 2022',
    link: 'https://chat-f-fozlush.vercel.app/',
    repository: 'https://github.com/Fozlush/chat-F'
  }
]

export default portfolio_list