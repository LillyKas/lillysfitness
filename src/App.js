import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'; 


import HomePage from "./pages/HomePage";
import StretchWorkout from "./pages/StretchWorkout";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

 
function App() {

 const {isLoading} = useAuth0();

 if(isLoading) return <div>Loading</div>

  return (
    <div className="App">
      <h1>Fitness App</h1>
      <LoginButton />
      <LogoutButton />

      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/stretch" element={ <StretchWorkout /> } />
      </Routes>
    </div>
    
  );
}
export default App;
