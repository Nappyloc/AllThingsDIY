import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Navbar from "./components/Nav/index";
import NoMatch from "./pages/NoMatch";
function App() {
  return (
    <Router>
      
    <div>
    <Navbar/>
    
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/profile" component={Profile}/>
      <Route component={NoMatch} />
      </Switch>
  
  </div>
  </Router>
  )

}

export default App;
