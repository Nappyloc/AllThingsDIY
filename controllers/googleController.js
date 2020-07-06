const axios = require( "axios" ).default
const API_KEY = require( "../key" ).API_Key

module.exports =
{
    search: function ( req, res )
    {
        console.log( "The serch topic was: " + req.params.topic )
        let searchTopic = req.params.topic

        axios.get

            ( "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=DIY%20" + searchTopic + "&key=" + API_KEY,

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




            } ).catch( err => res.json( err ) );
    }


}