import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/MainNav/index"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

class FormPage extends Component {

  state = {
    userName: "",
    password: ""
  };

  inputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  userLogin = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.userLogin({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => this.setState({ userName: "", password: "" }))
        .then(res => window.location = "/profile")
        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      
      <MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <Navbar/>
        <MDBRow>
          <MDBCard
            className='card-image center'
            style={{
              backgroundColor:
               'default-color-dark',
              width: '280rem'
            }}
          >
            <div className='text-dark rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='dark-text mb-5 mt-4 font-weight-bold'>
                  <strong>Welcome Back, Please Login</strong>
                </h3>
              </div>
              <MDBInput
                value={this.state.userName}
                onChange={this.inputChange}
                name="userName"
                label='Your username'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                value={this.state.password}
                onChange={this.inputChange}
                name="password"
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
                      onClick={this.userLogin}
                    >
                      Sign in
                    </MDBBtn>
                  </div>
                
                </MDBRow>
                <MDBCol md='12'>
                  <p className='font-small white-text d-flex justify-content-end'>
                    You don't have an account?
                    <a href='/signup' className='green-text ml-1 font-weight-bold'>
                      Create New Account
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
}

export default FormPage;