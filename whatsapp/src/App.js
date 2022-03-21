
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chatbar from './components/chatbar/Chatbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Login from './components/login/Login';

function App() {

  const [user, setUser]= useState();

  return (
    <div className="App-Wrapper">
    {!user ? (
     <Login/>
    ) : (
      <div className="App">
    
    <Routes>
      <Route exact path='/' element={<> <Sidebar/> <Chatbar/> </> } />    
   </Routes>

   <Routes>
      <Route exact path='/rooms' element={<><Sidebar/></>   } />  
      <Route exact path='/rooms/:roomId' element={<><Sidebar/> <Chatbar/></>  } />    
   </Routes>

    </div>
    ) } 
    
    </div>
  );
}

export default App;
