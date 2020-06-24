const axios = require( "axios" ).default

module.exports =
{
    search: function ( req, res )
    {
        let searchTopic = req.params.topic

        axios.get
        // update this with .env to hide the api key
            ( "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=DIY%20" + searchTopic +"&key=" + "AIzaSyDzIBhRC1bkXzlqa87cSgZ37fPXiGLSQfo",

                {
                    headers: {
                        'Accept': 'application/json'
                    }
                }




            ).then( function ( response )
            {
                console.log( response.data )
                // use the map function to pull data from the array
                let results = response.data.items.map( item =>
                {
                    return {
                        title: item.snippet.title,
                        thumbnailUrl: item.snippet.thumbnails.medium.url,
                        description: item.snippet.description,
                        videoId: item.id.videoId,
                        videoUrl: "https://www.youtube.com/watch?v=" + item.id.videoId

                    }
                } )

                res.send( results )




            } ).catch( err => res.status( 422 ).json( err ) );
    }


}