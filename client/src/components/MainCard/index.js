import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';


const CardExample = (props) => {
  return (
      
    
    <MDBCol>
        <br></br>
        <br></br>
        <br></br>
      <MDBCard style={{ width: "60rem" }}>
        <MDBRow>
          <MDBCol>
            <img className="img-fluid" alt={props.title} src={props.thumbnailUrl} />
          </MDBCol>
          <MDBCol>
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
                  <MDBBtn onClick={props.saveVideo} color="primary" key={props.key} >Save video</MDBBtn>
                </MDBCol>
                <MDBCol>
                  <MDBBtn color="primary" href={props.videoUrl} target="_blank" rel="noopener noreferrer"> Watch Video </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;