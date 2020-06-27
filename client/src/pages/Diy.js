import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component
{
  state = {
    video: []
  };

  componentDidMount ()
  {
    this.loadDisplay();
  }

  loadDisplay = () =>
  {
    API.getDisplay()
      .then( res => this.setState( { video: res.data } ) )
      .catch( err => console.log( err ) );
  };

  render ()
  {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Should I Create?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Save Video</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Video's on My List</h1>
            </Jumbotron>
            {this.state.video.length ? (
              <List>
                {this.state.video.map( video => (
                  <ListItem key={video._id}>
                    <a href={"/books/" + video._id}>
                      <strong>
                        {video.title} 
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ) )}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
