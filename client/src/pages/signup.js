import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
    
    <MDBContainer>
      <MDBRow>
          <MDBCard
            className='card-image'
            className="center"
            style={{
              backgroundColor:
               'default-color-dark',
              width: '28rem'
            }}
          >
            <div className='text-dark rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                <h3 className='green-text font-weight-bold'>
                  <strong>SIGN UP</strong>
                  </h3>
                </h3>
              </div>
              <MDBInput
                label='New username'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='New password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Repeat password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <div className='md-form pb-3'>
                <MDBInput
                  label={
                    <>
                      Accept the&nbsp;
                      <a href='#!' className='green-text font-weight-bold'>
                        Terms and Conditions
                      </a>
                    </>
                  }
                  type='checkbox'
                  id='checkbox1'
                  labelClass='white-text'
                />
              </div>
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
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                    Log in
                  </a>
                </p>
                </MDBCol>
                </MDBCol>
            </div>
          </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;