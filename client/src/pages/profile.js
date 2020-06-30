import React from "react";
import { FiTwitter } from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink, MDBCol,MDBRow ,
MDBIcon,MDBJumbotron,MDBCardImage,MDBCardTitle,MDBCardBody,MDBCardText,MDBContainer} from "mdbreact";
import "./profile.css"

export default () => (
  <BrowserRouter>
    <MDBRow>
        <MDBCol>
        <MDBNav className="justify-content-center">
      <MDBNavItem>
        <MDBNavLink to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/login">Link</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link</MDBNavLink>
      </MDBNavItem>
    
    </MDBNav>
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBCol md="4">

    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>My saved projects</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Link
              </MDBCardTitle>
              <MDBCardText>
               Description
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="#"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
        </MDBCol>
        <MDBCol md="4">

<MDBContainer className="mt-5 text-center">
  <MDBRow>
    <MDBCol>
      <MDBJumbotron className="text-center">
        <MDBCardTitle className="card-title h4 pb-2">
          <strong>My saved projects</strong>
        </MDBCardTitle>

        <MDBCardImage
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
          className="img-fluid"
        />
        <MDBCardBody>
          <MDBCardTitle className="indigo-text h5 m-4">
            Link
          </MDBCardTitle>
          <MDBCardText>
           Description
          </MDBCardText>

          <MDBCol className="d-flex justify-content-center mt-4" md="12">
            <MDBCol md="3" className="d-flex justify-content-around">
              <a href="#"><MDBIcon
                fab
                icon="linkedin-in"
                className="grey-text"
                size="lg"
              /></a>
              <a href="#"><MDBIcon
                fab
                icon="twitter"
                className="grey-text"
                size="lg"
              /></a>
              <a href="#"><MDBIcon
                fab
                icon="facebook-f"
                className="grey-text"
                size="lg"
              /></a>
            </MDBCol>
          </MDBCol>

        </MDBCardBody>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>


    </MDBCol>
    <MDBCol md="4">

<MDBContainer className="mt-5 text-center">
  <MDBRow>
    <MDBCol>
      <MDBJumbotron className="text-center">
        <MDBCardTitle className="card-title h4 pb-2">
          <strong>My saved projects</strong>
        </MDBCardTitle>

        <MDBCardImage
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
          className="img-fluid"
        />
        <MDBCardBody>
          <MDBCardTitle className="indigo-text h5 m-4">
            Link
          </MDBCardTitle>
          <MDBCardText>
           Description
         
          </MDBCardText>

          <MDBCol className="d-flex justify-content-center mt-4" md="12">
            <MDBCol md="3" className="d-flex justify-content-around ">
              <a href="#"><MDBIcon
                fab
                icon="linkedin-in"
                className="grey-text"
                size="lg"
              /></a>
              <a href="#">
                  
                  </a>
              <a href="#"><MDBIcon
                fab
                icon="facebook-f"
                className="grey-text"
                size="lg"
              /></a>
            </MDBCol>
          </MDBCol>

        </MDBCardBody>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>


    </MDBCol>
    </MDBRow>
   

  </BrowserRouter>
);