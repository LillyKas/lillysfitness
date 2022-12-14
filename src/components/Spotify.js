import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyInWorkout from "./SpotifyInWorkout"
import StretchWorkout from "./../pages/StretchWorkout";
import "../App.css";



function Spotify() {
  //------------------SPOTIFY CONNECTION START------------------------------
  //Authentication Credentials for Spotify Connection
  const CLIENT_ID = "4cf9d70821b1442497e46fec1e9b896c";
  const REDIRECT_URI = "https://lillysfitness.herokuapp.com/spotifyconnected";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
  ];



  //Get Token for Spotify Connection
  const [token, setToken] = useState("");

  //What you search for in Spotify
  const [searchKey, setSearchKey] = useState("");

  //Result of Spotify Search
  const [playlists, setPlaylists] = useState([]);

  //Get Playlist Id for Spotify player and show WebPlayer onClick
  const [playlistId, setPlaylistId] = useState("");
  const [showWebPlayer, setShowWebPlayer] = useState(false);

  //Set Token and stor it in localStorage
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    console.log(token);
    setToken(token);
  }, []);

  //Disconnect from Spotify and remove Token from localStorage
  const logoutSpotify = () => {
    setToken("");
    
  };

  //Search Function for Spotify
  const searchPlaylists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "playlist",
      },
    });
    setPlaylists(data.playlists.items);
  };

  //Display Artists
  const renderPlaylists = () => {
    return playlists.map((playlist) => ( 
      <div className="playlistSingle" key={playlist.id}>
      <div className="playlist-tile">
        {playlist.images.length ? (
          <img className="playlistImage" src={playlist.images[0].url} alt="" onClick={() => showPlaylist(playlist.id)}/>
        ) : (
          <div>No Image</div>
        )}
        <p className="playlist-name">{playlist.name}</p>
        </div>
      </div>
    ));
  };

const showPlaylist = (playlist) => {  
  setPlaylistId("spotify:playlist:"+ playlist)
  setShowWebPlayer(true)
  
}

  return (

    
    <div className="spotify">
      {!token ? (
        <a className="disconnectSpotify"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
            "%20"
          )}&response_type=${RESPONSE_TYPE}&show_dialog=true`}
        >
          Login to Spotify
        </a>
      ) : (
        <div className="spotify-container">
       { showWebPlayer &&  (
        <div>
        <div>
        <SpotifyInWorkout token={token} playlistId={playlistId}/>
        </div>
        </div>
        )}
        <div className="spotify-button">
        <button className="disconnectSpotify" onClick={logoutSpotify}>
          Disconnect Spotify
        </button>
        </div>
        </div>
      )}
       {token && (
       
        <form onSubmit={searchPlaylists} className="form">
          <input className="searchField" type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button className="searchBtn" type={"submit"}>Search</button>
        </form>
    
      )} 



      <div className="playlist-container">
      {renderPlaylists()}
     
</div>
      

    
    </div>


  );
}

export default Spotify;
