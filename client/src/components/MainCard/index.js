import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
  return (
      
    <MDBCol>
        <br></br>
        <br></br>
        <br></br>
      <MDBCard style={{ width: "30rem" }}>
        <img className="img-fluid" src={props.thumbnailUrl} />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.description}
          </MDBCardText>
          <MDBBtn color="primary">Save video</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;