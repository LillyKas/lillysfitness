import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';

function HomePage() {
  const { user, isAuthenticated} = useAuth0();
    return (
      
      isAuthenticated && (
      <div>
        <h1>Hey, {user.given_name}</h1>
        <Link to="/stretch">stretch</Link>
      </div>
      )
    );
  }
   
  export default HomePage;