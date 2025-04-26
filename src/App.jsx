import Footer from "./layout/Footer"
import Header from "./layout/Header"
import TopNavbar from "./layout/TopNavbar"


import Pages from './pages'

export default function App() {


  console.log('App Rendered')


  return (
    <div className="h-screen bg-orange-100 text-sky-900 font">
      <Header />

      <TopNavbar />

      <Pages />

      <Footer />
    </div>
  )
}
