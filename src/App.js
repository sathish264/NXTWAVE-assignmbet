import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
export default function App(){
     return(
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/register" element={<Register />}></Route>
        </Routes>
        </BrowserRouter>
     )
}
