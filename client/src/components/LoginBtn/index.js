import React from "react";
import { MDBBtn, MDBNavLink } from "mdbreact";
// import "./style.css";






// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class LogoutButton extends React.Component {


  render()
  {
    return (
      <MDBBtn
        outline color="danger">
        <MDBNavLink to= "/login">Login</MDBNavLink>
      </MDBBtn>
    );
  }
}

export default LogoutButton;
