import React from "react";
// import { FaBeer } from 'react-icons/fa';

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation,

} from "mdbreact";
import "./landing.css";
import API from "../utils/API";


class ClassicFormPage extends React.Component
{
  state = {
    collapseID: "",
    search: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState( prevState => ( {
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    } ) );

  inputChange = event =>
  {
    const { name, value } = event.target;
    this.setState( {
      [ name ]: value
    } );
  };



  diySearch = event =>
  {
    event.preventDefault()
    API.topicSearch( this.state.search )
      .then( res => this.setState( { search: "" } ) )
      .catch( err => console.log( err ) );
  }


  render ()
  {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse( "navbarCollapse" )}
      />
    );
    return (
      <div id="classicformpage">
        <div>
          <MDBNavbar dark expand="lg" fixed="top">
            <MDBContainer>
              <MDBNavbarToggler
                onClick={this.toggleCollapse( "navbarCollapse" )}
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
                  <MDBDropdownMenu basic >
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
                      value={this.state.search}
                      onChange={this.inputChange}
                      name="search"
                      placeholder="Search for project you want to build"
                      aria-label="Search"
                      width="350px"
                      height="250px"
                      
                     

                    />
                    <MDBBtn
                      color='success'
                      rounded
                      type='button'
                      className=""
                      onClick={this.diySearch}
                    >
                      Search
                </MDBBtn>

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