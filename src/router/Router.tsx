import { FC } from "react"
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { AboutPage } from '../components/pages'

const Router: FC = () => {
  return (
    <Routes>
      {routes.map(({path, element}) =>
				<Route key={path} path={path} element={element}/>
			)}
      <Route path="*" element={<AboutPage/>} />
    </Routes>
  )
}

export default Router