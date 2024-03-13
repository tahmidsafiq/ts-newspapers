import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"


const App = () => {
  const [category, setCategory] = useState('general');
  return (
    <div>
      <div className="logo">
        <a href="https://ts-newspapers.vercel.app/">
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tahmid">T</span>
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Safiq">S</span>
        <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="News">N</span>

        </a>  
      </div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
