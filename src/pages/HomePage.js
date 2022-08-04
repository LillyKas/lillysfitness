import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/workout">Start Workout</Link>
      </div>
    );
  }
   
  export default HomePage;