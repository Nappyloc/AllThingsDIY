import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Login from "./pages/login";
import NoMatch from "./pages/NoMatch";
import Card from "./components/ProfileCard/index"
import MainCard from "./components/MainCard/index"
function App() {
  return (
    <Router>  
    <div>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/card" component={Card}/>
      <Route path="/maincard" component={MainCard}/>
      <Route component={NoMatch} />
      </Switch>
  </div>
  </Router>
  )

}

export default App;
