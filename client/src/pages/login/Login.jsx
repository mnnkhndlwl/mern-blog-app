import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";


export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context); //to use dispach and isFetching from our context

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });  //when i click button it gonna call login start action and it gonna update isFetching to true
    //and after that i am gonna call my api
    try {
      const res = await axios.post("/auth/login", {  //passing user data
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

    return (
        <div className='login'>
             <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}> {/**Submit hone par hadle submit function ko call karege */}
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your Username..." ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."  ref={passwordRef}/>
        <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className='link' to="/register">REGISTER</Link>
        </button>
        </div>
    )
}
