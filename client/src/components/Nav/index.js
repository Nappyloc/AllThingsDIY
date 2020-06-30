import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
  MDBDropdown,
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem,
  MDBLink
} from "mdbreact";

function Nav() {
  return (
    <div>
    <MDBNavbar dark expand="lg" fixed="top">
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
               Dropdown
    </MDBDropdownToggle>
<MDBDropdownMenu  basic >
  <MDBDropdownItem>Action</MDBDropdownItem>
  <MDBDropdownItem>Another Action</MDBDropdownItem>
  <MDBDropdownItem>Something else here</MDBDropdownItem>
  <MDBDropdownItem divider />
  <MDBDropdownItem>Separated link</MDBDropdownItem>
</MDBDropdownMenu>
</MDBDropdown>
       <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
                <MDBNavItem>
                   <MDBNavLink to="/profile">Profile</MDBNavLink>
               </MDBNavItem>
          </MDBNavbarNav>
              <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="/signup"> SignUp</MDBNavLink> 
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  
  </div>
  );
}

export default Nav;
