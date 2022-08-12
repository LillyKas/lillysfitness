import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyInWorkout = (props) => {

    const {token} = props;
    console.log("Spotifyin workout"+token)
  return (
    <div >   <SpotifyPlayer
    className='spotifyPlayer'
    token="BQCFLMwrDBM_bTUm1C0aUTWNTz1C8AOt9NGT7eay4z34qblfDnK7B39whmHu8XITo2lVkReJEFtUPxlzRaqQrY13Kb39iLrM0Uu1q8oagjC0KkFYcudwwEl7mWXsic_y8K91Y4TFsZ71ru9G932yggP-Oz4cIrnfX_i0OW3AU9DbtBr287qsNMR-H3hsWZ5fRd6V"
    uris={['spotify:playlist:1hbvNy48i7cJ5rVn2KOkzl']}
  />;
    </div>
  )
}

export default SpotifyInWorkout