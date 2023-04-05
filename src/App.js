import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from './Pages/Member/Dashboard';
import Header from './Pages/Member/Header';
import Fee from './Pages/Member/Fee';



function App() {
 
  
  return ( 
    <>
    


    <Routes>    
<Route path='/' element={<><Navbar/><Home></Home></>}></Route>
<Route path='/about' element={<><Navbar/><About></About></>}></Route>
<Route path='/contact' element={<><Navbar></Navbar><Contact></Contact></>}></Route>
<Route path='/login' element={<><Navbar/><Login></Login></>}></Route>

<Route element={<ProtectedRoutes></ProtectedRoutes>}>
<Route path='/user' element={<><Header></Header><Dashboard></Dashboard></>}></Route>
<Route path='/user/fee' element={<><Header></Header><Fee></Fee></>}></Route>
<Route path='/user/shedule' element={<><Header></Header><Login></Login></>}></Route>
<Route path='/user' element={<><Header></Header><Login></Login></>}></Route>

</Route>

    </Routes>
    
    </>
  );
}

export default App;
