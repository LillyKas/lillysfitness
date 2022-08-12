import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyInWorkout = (props) => {

    const {token} = props;
    console.log("Spotifyin workout"+token)
  return (
    <div >   <SpotifyPlayer
    className='spotifyPlayer'
    token="BQA8UaG1TwLVkKr5dANRDDJXRbSVAuTNx4_l6vfXQw-KtB86AhWbAIC3m86uE-m8_s5aQKro0YfHypKN8H-5usTGfqrjIH2ipRlv6PNquSUWf-Xsq5Zul907AQnN0nQBjILdfphXV-9Sdpr61ISXdl_ovegbW0TCK4o6sso6MU2ONFYrQ6jQCjMhuTRpmEo-mRmGI_L4pnBXT9y9L8f0Nk0SRyWihL4"
    uris={['spotify:playlist:1hbvNy48i7cJ5rVn2KOkzl']}
  />;
    </div>
  )
}

export default SpotifyInWorkout