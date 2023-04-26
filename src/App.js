import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Member/Dashboard';
import Fee from './Pages/Member/Fee';
import Register from './Pages/Register';
import {UserElement} from './Roles';



function App() {
 
  
  return ( 
    <>
    
<Navbar></Navbar>

    <Routes>    
<Route path='/' element={
  <PublicElement>
<Home></Home>
  </PublicElement>
}></Route>
<Route path='/about' element={
<PublicElement>
<About></About>
</PublicElement>
}></Route>
<Route path='/contact' element={
<PublicElement>
<Contact></Contact>
</PublicElement>
}></Route>
<Route path='/login' element={
<PublicElement>
<Login></Login>
</PublicElement>
}></Route>
<Route path='/register' element={
<PublicElement>
<Register></Register>
</PublicElement>
}></Route>
<Route path='/user' element={
<UserElement>
<Dashboard></Dashboard>
</UserElement>
}></Route>
<Route path='/user/fee' element={
<UserElement>
<Fee></Fee>
</UserElement>
}></Route>
<Route path='/user/shedule' element={
<UserElement>
<Login></Login>
</UserElement>
}></Route>

    </Routes>
    
    </>
  );
}

function PublicElement({children}){
return <>{children}</>
}



export default App;
