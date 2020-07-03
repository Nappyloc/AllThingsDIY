import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const CardExample = (props) => {
  return (
      
    <MDBCol>
        <br></br>
        <br></br>
        <br></br>
      <MDBCard style={{ width: "20rem" }}>
        <MDBCardImage className="img-fluid" src={props.thumbnailUrl} waves />
        <MDBCardBody>
          <MDBRow>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <MDBCardText>
              {props.description}
            </MDBCardText>
          </MDBRow>
          <br/>
          <MDBRow>
            <MDBCol>
              <MDBBtn onClick={props.deleteVideo} id={props._id} color="primary">Delete</MDBBtn>
            </MDBCol>
            <MDBCol>
              <MDBBtn color="primary" href={props.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;