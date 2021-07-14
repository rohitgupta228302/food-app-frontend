import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./images/hotel-image.jpg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          <img src={logo} alt="logo" height="50px" weight="40px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orderNow">
                Order Now
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ShowBookings">
                ShowBookings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignUp">
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;

// return (
//     <>
//       <NavLink exact activeClassName="active_class" to="/">
//         Home{" "}
//       </NavLink>
//       <br />

//       <NavLink exact activeClassName="active_class" to="/BookAHotel">
//         {" "}
//         BookAHotel{" "}
//       </NavLink>
//       <br />

//       <NavLink exact activeClassName="active_class" to="/ShowBookings">
//         {" "}
//         ShowBookings{" "}
//       </NavLink>
//       <br />

//       <NavLink exact activeClassName="active_class" to="/SignUp">
//         {" "}
//         SignUp
//       </NavLink>
//     </>
//   );
