import React from "react";
import { MDBBtn, MDBNavLink } from "mdbreact";
// import "./style.css";






// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class LogoutButton extends React.Component {

  state = {
    userLogged: ""
  };

  

  Logout() {
    console.log("Does this work?")
    const cookieValue = document.cookie
    if(cookieValue) {
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      })
      window.location = "/"

    } 

  }

  render()
  {
    return (
      <MDBBtn
        onClick={() => this.Logout()}
      >
        <MDBNavLink to="#">
      Logout
      </MDBNavLink>
      </MDBBtn>
    );
  }
}

export default LogoutButton;
