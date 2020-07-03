import React from "react";
import Navbar from "../components/ProfileNav/index";
import { FaTwitter,FaFacebookSquare,FaGithub } from 'react-icons/fa';
import Card from "../components/ProfileCard/index";
import { MDBCol,MDBRow , MDBJumbotron,MDBCardImage,MDBCardTitle,MDBCardBody,MDBCardText,MDBContainer,MDBIcon,MDBBtn} from "mdbreact";
import "./profile.css"

export default () => (
    
  <MDBContainer>
    <Navbar/>
    <br/><br/><br/><br/>
    <MDBRow>
    <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Welcome to your profile page</MDBCardTitle>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View your saved projects</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <Card/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);