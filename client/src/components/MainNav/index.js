import React from "react";
// import { FaBeer } from 'react-icons/fa';
import Logout from "../LogoutBtn"
import Login from"../LoginBtn";
import Profile from "../ProfileBtn"

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";




class ClassicFormPage extends React.Component {
  state = {
    collapseID: "",
    loginState:false
  };
  componentDidMount ()
  {
    
    const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('id'));
  if(cookieValue) {
    
    this.setState({loginState:true})
    
  }
  else
  {
    this.setState({loginState:false})
  }
  }
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
          <div>
            <MDBNavbar expand="lg" >
              <MDBContainer>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
               <MDBNavbarNav left>
                        <MDBNavItem>
                          {(this.state.loginState) ? <Profile/> : null}
                           {/* <MDBNavLink to="/profile">Profile</MDBNavLink> */}
                       </MDBNavItem>
                       
                  </MDBNavbarNav>
                  <MDBNavbarNav center>
                  <MDBNavItem>
                           <img src="https://github.com/hungle913/images/blob/master/ClickyGame/DIY/DIY_Banner.jpg?raw=true"/>
                       </MDBNavItem>
                       </MDBNavbarNav>
                      <MDBNavbarNav right>
                      { (this.state.loginState) ?  <Logout/> : <Login/>}
                    </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
           
            {this.state.collapseID && overlay}
          </div>
        
       
      </div>
    );
  }
}

export default ClassicFormPage;