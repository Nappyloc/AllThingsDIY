import React from "react";
import Navbar from "../components/MainNav/index";
import MainCard from "../components/MainCard";
import SavedCard from "../components/SavedCard"

// import { FaBeer } from 'react-icons/fa';
import
{

  MDBContainer,
  MDBAnimation,
  MDBRow,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBCol

} from "mdbreact";
import "./landing.css";
import API from "../utils/API";
// const user = res.cookie.userid



class ClassicFormPage extends React.Component
{
  state = {
    collapseID: "",
    search: "",
    searchResults: [],
    videos: [],
    userId: null,

  };

  componentDidMount ()
  {
    this.loadPreviousSearch()
    const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('id'));
  if(cookieValue) {
    const id = cookieValue.split('=')[1]
  this.setState({userId: id})}
  
  }

  toggleCollapse = collapseID => () =>
    this.setState( prevState => ( {
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    } ) );


  loadPreviousSearch = () =>
  {
    API.savedSearch()
      .then( res => { this.setState( { videos: res.data } ); console.log( " this is previous search data from function ", res.data ) } )
      .catch( err => console.log( err ) )
  }

  inputChange = event =>
  {
    const { name, value } = event.target;
    this.setState( {
      [ name ]: value
    } );
  };



  diySearch = event =>
  {
    event.preventDefault()
    API.topicSearch( this.state.search )
      .then( res => { this.setState( { searchResults: res.data } ); console.log( "This is the current search data ", res.data ) } )
      .catch( err => console.log( err ) );
  }

  saveVideo = (video, event) => {
    event.preventDefault()
    if(this.state.userId===null) {
      window.location = "/login"
    } else {
      video.user = this.state.userId
      API.saveVideo(video)
      .then(res => window.location ="profile")
      .catch(err => console.log(err))
    }
  }

  saveExistingVideo = (video, event) => {
    event.preventDefault()
    if(this.state.userId===null) {
      window.location = "/login"
    } else {
      video.user = this.state.userId
      video._id = null
      API.saveVideo(video)
      .then(res => window.location ="profile")
      .catch(err => console.log(err))
    }
  }


  render ()
  {

    return (

      <div id="classicformpage">
        <Navbar />
      <br/>
      <br/>
      <br/>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                </MDBAnimation>
              </MDBRow>
              <MDBRow>
                <MDBCol size="10">
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      name="search"
                      value={this.state.search}
                      onChange={this.inputChange}
                      placeholder="Search for project you want to build"
                      aria-label="Search"
                      width="350px"
                      height="250px"
                    />
                    
              

                  </div>
                </MDBCol>
                <MDBCol>
                <MDBBtn
                      outline color="danger"
                      rounded
                      type='button'
                      onClick={this.diySearch}
                    >
                      Search
                </MDBBtn>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <MDBContainer>
          <br/>
          <h1 className="results">Search Results</h1>
          {/* Search Results */}
          <MDBRow className="py-5">
            {this.state.searchResults.map( video => (
              <MainCard
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                description={video.description}
                key={video._id}
                // pass event as parameter in the function to be able to pass and evoke evaluation
                saveVideo={(event) => this.saveVideo(video,event)}
              />

            ) )}
          </MDBRow>
        </MDBContainer>


        <MDBContainer>
          <hr/>
          <h1 className="results">Trending Searches</h1>
          {/* Trending Results */}
          <MDBRow className="py-5">
            {this.state.videos.map( video => (
              <SavedCard
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                description={video.description}
                key={video._id}
                saveExistingVideo={(event) => this.saveExistingVideo(video, event)}
              />

            ) )}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ClassicFormPage;