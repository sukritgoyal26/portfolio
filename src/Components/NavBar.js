import React , { useEffect, useState }from "react";
import {Link ,  useLocation} from "react-router-dom"
import "../styles/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder.js";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
  
    const location = useLocation();
  
    useEffect(() => {
      setExpandNavbar(false);
    }, [location]);
  
    return (
      <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <ReorderIcon />
          </button>
        </div>
        <div className="links">
          <Link to="/portfolio/home"> Home </Link>
          <Link to="/portfolio/projects"> Projects </Link>
          <Link to="/portfolio/experience"> Experience </Link>
        </div>
      </div>
    );
  }
  
  export default Navbar;