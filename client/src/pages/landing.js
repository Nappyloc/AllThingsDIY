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


class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    
  render() {
    return (
      <div id="classicformpage">
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