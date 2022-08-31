import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyInWorkout = (props) => {

    const {token} = props;
    console.log(props)
  
  return (
    <div >   <SpotifyPlayer
    className='spotifyPlayer'
    token={token}
    uris={[`spotify:playlist:1hbvNy48i7cJ5rVn2KOkzl`]}
  />;
    </div>
  )
}

export default SpotifyInWorkout