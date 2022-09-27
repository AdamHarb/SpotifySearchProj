import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
import {useState} from "react";

const LoginButton = () => {
    const [token, setToken] = useState("");
    return (
                <div className ='align-items-center d-flex justify-content-center'>
                <SpotifyAuth
                    redirectUri={process.env.REACT_APP_REDIRECT_URI}
                    clientID={process.env.REACT_APP_CLIENT_ID}
                    scopes={[Scopes.userReadPrivate, 'user-read-email']}
                    onAccessToken={(token) => {setToken(token)} }
                    title='Sign in with Spotify'
                    btnClassName="btn btn-primary loginButton"
                />
                    </div>
    )
}


export default LoginButton;