
import Header from "./Header/Header"
import Section1 from "./Home/container-1"
import Section2Main from "./Home/container-2"
import Home from "./Home/Home"
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
    {/* <Header/> */}
    {/* <Section1/> */}
    {/* <Section2Main/>
     */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
