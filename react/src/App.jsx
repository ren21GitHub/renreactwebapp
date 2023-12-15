import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"
import NotFound from "./views/NotFound"

export default function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element ={<Home/>} />
            <Route path="/Home" element ={<Home/>} />
            <Route path="/About" element ={<About/>} />
            <Route path="/Contact" element ={<Contact/>} />
            <Route path="*" element ={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

// export default App
