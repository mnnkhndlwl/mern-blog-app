// typed rfc --- for function based component
import { Link } from "react-router-dom";
import React from "react";
import "./topbar.css"; //to import topbar.css and to use it in this file
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Topbar() {

  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };          

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">     {/**Using link so that if we click on that we can go there here "to" refer to that url where we want to go */}
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
          <Link className="link" to="/write">WRITE</Link></li>      {/**Similarly Link is used for write */}
          <li className="topListItem" onClick={handleLogout}>  {/**when you click it gonna fire handlelogout function */}
            {user && "LOGOUT"}  {/**if there's a user then only we will show logout or agar tum pseudo user ko false arte ho to logout nahi dikhai dega */}
          </li> 
        </ul>
      </div>
      <div className="topRight">
          {/**If there's a user then only we are goin to show profile picture otherwise show login and register */}
          {user ? (
          <Link className="link" to="/settings">  {/**on clicking image we gonna redirected to settings page */}
            <img
              className="topImg"
              src={PF+user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
