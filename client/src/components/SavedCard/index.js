import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
  return (
      
    
    <MDBCol>
        <br></br>
        <br></br>
        <br></br>
      <MDBCard style={{ width: "30rem" }}>
        <img className="img-fluid" alt={props.title} src={props.thumbnailUrl} />
        <a href={props.videoUrl}> Watch Video</a>
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.description}
          </MDBCardText>
          <MDBBtn onClick={props.saveExistingVideo} color="primary" key={props.key} >Save video</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;