import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';
import stretchPic from '../pictures/Stretching.png';
import fullBodyPic from '../pictures/Full Body.png'; 
import warmUpPic from '../pictures/Warm Up.png'; 
import backArrowPic from '../pictures/left-arrow.png'; 

import LogoutButton from '../components/LogoutButton';
import animatedPic from '../pictures/OverviewAnimation.gif'; 

function HomePage() {
  const { user, isAuthenticated} = useAuth0();

  console.log(user)
    return (
      
      isAuthenticated && (
<div>
        <div className="greeting-container">
        <Link to="/"> 
        <img src={backArrowPic} alt="backArrowPic" className='backArrowPic' />
        </Link>
        <h3>Hello, sunshine</h3>
        <img src={user.picture} alt="profilePic" className='profilePic' />
        </div>
       
      <div className="menu-container">
  
        <div className="workout-link-container">
        <Link  to="/stretch">
        <img src={stretchPic} alt="stretchPic" className='workoutPic' />
       
        <img src={fullBodyPic} alt="stretchPic" className='workoutPic' />
        <img src={warmUpPic} alt="stretchPic" className='workoutPic' />
        </Link>
        </div>
      
        <LogoutButton />
      </div>
      </div>

      )
    );
  }
   
  export default HomePage;