import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
 
function App() {
  return (
    <div className="App">
      <h1>Fitness App</h1>
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/workout" element={ <WorkoutPage /> } />
      </Routes>
    </div>
    
  );
}
export default App;
