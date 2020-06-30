import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import Signup from "./components/signup";
import Landing from "./pages/landing"
import Signup from "./pages/signup"
import Profile from "./pages/profile"

// import Jumbotron from "./components/Jumbotron";
// import Profile from "./components/profile";

function App() {
  return (
    <Router>
    <div>

      <Landing/>
      {/* <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
      </Switch> */}
  
  </div>
  </Router>
  )

}

export default App;
