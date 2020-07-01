import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../components/ProfileNav/index";
import Card from "../components/ProfileCard/index";
import { MDBCol,MDBRow , MDBJumbotron,MDBCardImage,MDBCardTitle,MDBCardBody,MDBCardText,MDBContainer} from "mdbreact";
import "./profile.css"

export default () => (

  <MDBContainer>
    <Navbar/>
    <br/><br/><br/>
    <MDBRow>
      <MDBCol>
        EMPTy
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <Card/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);