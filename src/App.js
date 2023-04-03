import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/contact' element={<Contact></Contact>}></Route>
<Route path='/login' element={<Login></Login>}></Route>


<Route path='/user' element={<Login></Login>}></Route>
<Route path='/user/fee' element={<Login></Login>}></Route>
<Route path='/user/diet' element={<Login></Login>}></Route>
<Route path='/user' element={<Login></Login>}></Route>



    </Routes>
    
    </>
  );
}

export default App;
