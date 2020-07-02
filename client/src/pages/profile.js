import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../components/ProfileNav/index";
import Card from "../components/ProfileCard/index";
import { MDBCol, MDBRow, MDBJumbotron, MDBCardImage, MDBCardTitle, MDBCardBody, MDBCardText, MDBContainer } from "mdbreact";
import "./profile.css"
import API from "../utils/API";



class ProfilePage extends React.Component
{
  state = {
    savedVideos: [],
    userId: null,
    loadedVideos: []
  }

  componentDidMount ()
  {

    const cookieValue = document.cookie
      .split( '; ' )
      .find( row => row.startsWith( 'id' ) );
      console.log(cookieValue)
    if ( cookieValue )
    {
      const id = cookieValue.split( '=' )[ 1 ]
      this.setState( { userId: id } )
      this.loadSavedVideos(id)
    }
    
  }



  loadSavedVideos = (id  ) =>
  {

    API.loadMyVideos(id)
      .then( res => { this.setState( { loadedVideos: res.data } ); console.log( res.data ) } )
      .catch( err => console.log( err ) )

  }

  deleteVideo = (video, event) => {
    event.preventDefault()
    API.deleteVideo(video._id)
    .then(res => this.loadSavedVideos(this.state.userId))
    .catch(err => console.log(err))

    
    
  }





  render ()
  {
    return (
      <MDBContainer>
        <Navbar />
        <br /><br /><br />
        <MDBRow>
          <MDBCol>
            EMPTy
      </MDBCol>
        </MDBRow>
        <MDBRow className="py-5">
          {this.state.loadedVideos.map( video => (
            <Card
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              videoUrl={video.videoUrl}
              description={video.description}
              key={video._id}
              // pass event as parameter in the function to be able to pass and evoke evaluation
              deleteVideo={( event ) => this.deleteVideo( video, event )}
            ></Card>




          ) )}
        </MDBRow>
      </MDBContainer>


    )
  }

}

export default ProfilePage;














