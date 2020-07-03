import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const CardExample = (props) => {
  return (
      
    
    <MDBCol>
        <br></br>
        <br></br>
        <br></br>
      <MDBCard style={{ width: "20rem" }}>
        <img className="img-fluid" alt={props.title} src={props.thumbnailUrl} />
        
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
              <MDBBtn onClick={props.saveExistingVideo} color="primary" key={props.key} >Save video</MDBBtn>
            </MDBCol>
            <MDBCol>
              <MDBBtn color="primary" href={props.videoUrl} target="_blank" rel="noopener noreferrer" >Watch Video</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;