
import './App.css'
import Buttons from './components/buttons/Buttons'
import Category from './components/category/Category'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import { useBrunch, useDrink } from './hook/menuHook'
import {HashLoader} from'react-spinners'

function App() {
  const { isLoading: isDrinkLoading } = useDrink();
  const { isLoading: isBrunchLoading } = useBrunch();
  if(isDrinkLoading||isBrunchLoading){
    return <div className='h-screen flex justify-center items-center'><HashLoader color='#0796EF'/></div>
  }
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
