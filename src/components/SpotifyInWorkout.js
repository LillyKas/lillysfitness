import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyInWorkout = (props) => {

    const {token} = props.token;
    const {playlistId} = props.playlistId;

  return (
    <div >   <SpotifyPlayer
    className='spotifyPlayer'
    token={token}
    uris={[`spotify:playlist:`+ {playlistId}]}
  />;
    </div>
  )
}

export default SpotifyInWorkout