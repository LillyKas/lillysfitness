import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyInWorkout = (props) => {

    const {token} = props;
    console.log("Spotifyin workout"+token)
  return (
    <div >   <SpotifyPlayer
    className='spotifyPlayer'
    token="BQBJ8KExXgpfQehoiAZyD9QeW9kAbdRo0vRlrGYtP0DBY_bSFOoxoFGljOpr9UTg1OPllHmRALJR6Hg3n-1Z9g0ChdA_pHwW3RyBeAzhMQOkJ6SrFOiA42O1T2GgyMPfTaub_6zgUtiv1QTyJFG_nYilPryEHIJ0R1uOtpCLAlazMDEZnqJq8htKzzbaIz9LZBzSUdqly5EnrzZGaDdKuPTxv4OMd6E"
    uris={['spotify:playlist:1hbvNy48i7cJ5rVn2KOkzl']}
  />;
    </div>
  )
}

export default SpotifyInWorkout