import Footer from "./layout/Footer"
import Nav from "./layout/nav"
import Company from "./layout/company"
import MarketPlace from "./layout/MarketPlace"
import Features from "./layout/Features"
import Team from "./layout/team"
import Contact from "./layout/Contact"
export default function App() {

  return (
    <div>
      <Nav />
      <Company/>
      <MarketPlace/>
      <Features/>
      <Team/>
      <Contact/>
      <Footer />
    </div>
  )
}
