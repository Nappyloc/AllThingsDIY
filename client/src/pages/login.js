import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
   
    <MDBContainer>
         <br></br>
         <br></br>
         <br></br>
         
          <MDBRow>
          <MDBCard
            className='card-image'
            className="center"
            style={{
              backgroundColor:
               'default-color-dark',
              width: '280rem'
            }}
          >
            <div className='text-dark rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='dark-text mb-5 mt-4 font-weight-bold'>
                <h3 className='green-text font-weight-bold'>
                  <strong>Welcome Back, Please Login</strong>
                  </h3>
                </h3>
              </div>
              <MDBInput
                label='Your username'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
             
              <MDBCol>
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
            
                </MDBCol>
            </div>
          </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;