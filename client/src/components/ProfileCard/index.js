import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
  return (
      
    <MDBCol>
        <br></br>
        <br></br>
        <br></br>
      <MDBCard style={{ width: "30rem" }}>
        <MDBCardImage className="img-fluid" src={props.thumbnailUrl} waves />
        <MDBCardBody>
        <a style={{display: "table-cell"}} href={props.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
   
  <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.description}
          </MDBCardText>
          <MDBBtn onClick={props.deleteVideo} id={props._id} color="primary">Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;