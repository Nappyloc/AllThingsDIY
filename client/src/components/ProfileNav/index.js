import React from "react";
import Logout from "../LogoutBtn";
import Login from "../LoginBtn";

// import { FaBeer } from 'react-icons/fa';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem
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
    
    this.setState({ loginState:true })
    
    
  }
  else
  {
    this.setState( {loginState:false})
    
  }
  console.log(this.state.loginState)
  console.log(this.state.userLogged)
  
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
            <MDBNavbar expand="lg">
              <MDBContainer>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                     <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Profile
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic >
          <MDBDropdownItem>Your Profile</MDBDropdownItem>
          <MDBDropdownItem>Change Password</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Separated link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
               <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
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