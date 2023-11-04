import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <img
          src="../assets/logo.png"
          alt="Description of your image"
          className="logoimg"
        />

        <h2
          style={{
            color: "#4CC3FF",
            fontFamily: " 'Monoton', sans-serif",
            marginTop:"2.5vh"
          }}
        >
          Fancy
          <span
            style={{
              color: "white",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            Fuse
          </span>
        </h2>

        <div
          className="navlinks"
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "3vh",
            fontFamily: "Concert One",
            color: "white",
            margin: "3.3vh",
          }}
        >
          
          <a className="a1">Latest Designs</a>
          <a className="a1">Our Solution</a>
          <a className="a1">Partners</a>
          <a className="a1">Contact Us</a>
        </div>
        
        <Link to="/login"><button className="btn-donate">Sign Up</button></Link>
        <Link to="/register"><button className="btn-donate">Register</button></Link>
      </nav>
    </>
  );
}
