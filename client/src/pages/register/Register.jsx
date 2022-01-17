import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState(""); // initially it's gonna be an empty string
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {     //it's gonna take (e)
    e.preventDefault();   // preventDefault blank submit ko roke ga
    setError(false);
    try {
      const res = await axios.post("/auth/register", {   // i am gonna pass my user and its gonna be a post method
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");  //if we dont have any error and it has some data we are gonna redirectd to login page
    } catch (err) {
      setError(true);
    }
  };


  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>  {/**on submit it gonna fire the handleSubmit function */}
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          on
          onChange={(e) => setUsername(e.target.value)} //if i change this input it gonna automatically set update this username
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          on
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          on
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
      {error && <span style={{color:"white", marginTop:"10px"}}>Something went wrong!</span>}  {/**if there's a error then show this message */}
    </div>
  );
}
