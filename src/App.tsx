import { FC } from "react"
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Menu } from "./components/layouts";
import './variables.scss'
import './style.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu/>
        <div className="wrapper">
          <Router/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
