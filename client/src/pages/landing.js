import React from "react";
import {Route,Switch} from "react-router-dom";
import Signup from "./signup";

// import { FaBeer } from 'react-icons/fa';
import { BrowserRouter as Router } from "react-router-dom";
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
import "./landing.css";


class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };

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
           
            {this.state.collapseID && overlay}
          </div>
        
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <hr className="hr-light" />
                </MDBAnimation>       
              </MDBRow>
              <MDBRow>
            <MDBCol>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search for project you want to build"
                            aria-label="Search"
                            width="350px"
                            height="250px"
                          />
                        </div>
            </MDBCol>
        </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <MDBContainer>
            
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
          
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ClassicFormPage;