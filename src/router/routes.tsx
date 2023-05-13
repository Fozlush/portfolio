import { AboutPage, ContactsPage, PortfolioPage } from "../components/pages"
import { aboutPageRoute, contactsPageRoute, portfolioPageRoute } from "./paths"

export const routes = [
  {
    path: aboutPageRoute,
    element: <AboutPage/>
  },
  {
    path: contactsPageRoute,
    element: <ContactsPage/>
  },
  {
    path: portfolioPageRoute,
    element: <PortfolioPage/>
  }
]