import { AboutPage, ContactsPage, DetailPage, PortfolioPage } from "../components/pages"
import { aboutPageRoute, contactsPageRoute, detailPageRoute, portfolioPageRoute } from "./paths"

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
    path: detailPageRoute,
    element: <DetailPage/>
  },
  {
    path: portfolioPageRoute,
    element: <PortfolioPage/>
  }
]