
import './App.css'
import Buttons from './components/buttons/Buttons'
import Category from './components/category/Category'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Menu />
      <Buttons />
      <Category />
      <Footer/>
    </div>
  )
}

export default App
