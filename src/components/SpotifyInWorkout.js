import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyInWorkout = (props) => {

    const {token} = props;
    const {playlistId} = props;

  
  return (
    <div >   <SpotifyPlayer
    className='spotifyPlayer'
    token={token}
    uris={[playlistId]}
  />;
    </div>
  )
}

export default SpotifyInWorkout