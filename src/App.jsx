
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Reg from './Reg'
 import './App.css'
import Regi from './Regi'
import Login from './Login'
import { BsAirplane } from "react-icons/bs";



// import Calcc from './Calcc'

function App() {
 

  return (
    <>
      <div>
      <BsAirplane />
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Reg/>}></Route>
        <Route path='/regi' element={<Regi/>} />
        <Route path='/log' element={<Login/>} />

        


       
        </Routes>
        </BrowserRouter>
      
        {/* <Calcc/> */}
        </div>
        </>
  )
}

export default App
