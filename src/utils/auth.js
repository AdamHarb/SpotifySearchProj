import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const LoginButton = () => {
    return (
                    <div className="buttonContainer">
                        <SpotifyAuth
                            redirectUri={process.env.REACT_APP_REDIRECT_URI}
                            clientID={process.env.REACT_APP_CLIENT_ID}
                            scopes={[Scopes.userReadPrivate, 'user-read-email']}
                            onAccessToken={(token) => {
                                Cookies.set("spotifyAuthToken", token)
                            } }
                            title='Sign in with Spotify'
                            btnClassName="btn btn-primary loginButton"
                        />
                    </div>


    )
}


export default LoginButton;