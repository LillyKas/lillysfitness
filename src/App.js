import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'; 


import HomePage from "./pages/HomePage";
import StretchWorkout from "./pages/StretchWorkout";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import OverviewComponent from "./pages/Overview";

import startPic from './pictures/yoga.gif'; 

 
function App() {

 const {isLoading} = useAuth0();
 const { user, isAuthenticated} = useAuth0();

 if(isLoading) return <div>Loading</div>



  return (
    <div className="App">
    <div className="container">
  
<OverviewComponent />
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/stretch" element={ <StretchWorkout /> } />
        <Route path="/spotifyconnected" element={ <HomePage /> } />
        
      </Routes>
      <div className='logBtn'>
      <LoginButton />
      </div>
     
    </div>
    </div>
    
  );
}
export default App;
