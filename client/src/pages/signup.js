import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/SignupNav/index"
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

  createUsername = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.createUser({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => this.setState({ userName: "", password: "" }))
        .then(res => window.location = "/login")
        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      <MDBContainer>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <MDBRow>
          <MDBCard
            className='card-image center'
            style={{
              backgroundColor:
                'default-color-dark',
              width: '28rem'
            }}
          >
          <div className='text-dark rgba-stylish-strong py-5 px-5 z-depth-4'>
            <div className='text-center'>
              <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                <strong>SIGN UP</strong>
              </h3>
            </div>
            <MDBInput
              value={this.state.userName}
              onChange={this.inputChange}
              name="userName"
              label='New username'
              group
              type='text'
              validate
              labelClass='white-text'
            />
            <MDBInput
              value={this.state.password}
              onChange={this.inputChange}
              name="password"
              label='New password'
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
                    onClick={this.createUsername}
                  >Sign up
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='/login' className='green-text ml-1 font-weight-bold'>
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
}

export default FormPage;