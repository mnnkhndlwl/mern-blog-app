import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Topbar from "./topbar/Topbar";
import { useContext } from "react";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const { user } = useContext(Context);            /**Creating a user and we are gonna fetch this user from our context */
  return (
    <Router>     {/**Here we are using our react router dom  */}   
      <Topbar />   { /*// WE have imported pur topbar in our app.js to use it in our react.js application hell yeah*/}
      { /*// WE have imported our home in our app.js to use it in our react.js application hell yeah after that i removed my homepage and replaced it with our single for just practise*/}
      <Switch>        
        <Route exact path="/">      {/**Route is going to the path where we want to go */}
          <Home />
        </Route>
        <Route exact path ="/posts">
          <Home/>
        </Route>
        <Route exact path ="/write">   
        {user ? <Write /> : <Login />}            {/**Importing write component */}
        </Route>
        <Route exact path ="/register">
        {user ? <Home /> : <Register />}   {/**Importing register component and if there is a user then go to homepage otherwise go to register page */}
        </Route>
        <Route exact path ="/settings">
        {user ? <Setting /> : <Login />}   {/**Importing setting component nad if there's a user then go to settings page otherwise login */}
        </Route>
        <Route path="/post/:id">           {/**providing post id here to go to that particular post */}
          <Single />           {/**Importing single component and i did not apply condition to check user as we want everyone to see this page */}
        </Route>
        <Route exact path ="/login">
        {user ? <Home /> : <Login />}    {/**Importing login component and checking if there's a user or not */}
        </Route>
      
        </Switch>
    </Router>
  );
}

export default App;
