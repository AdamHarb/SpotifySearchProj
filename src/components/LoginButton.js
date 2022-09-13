import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import qs from "qs";

const axios = require('axios').default;

// const genRand = (len) => { // Function used to create the unique state
//     return Math.random().toString(36).substring(2,len+2);
// }

const LoginButton = () => {
    const CLIENT_ID="996f176e7bbf4a4dbada28dc764183c0";
    const CLIENT_SECRET="35cacae309a841549f78ec106d0f192e";
    const REDIRECT_URI="http://localhost:3000/";
    let state= "esrgniouhrsy";
    let code=null;

    useEffect( () => {
            const searchParams = new URLSearchParams(window.location.search);
            if (searchParams.has('code')) {
                postReq().then(r => (console.log('Requested.')));
                async function postReq() {
                    code = getCode();
                    const data = {
                            code: code,
                            redirect_uri: REDIRECT_URI,
                            grant_type: "client_credentials",
                            client_id: CLIENT_ID,
                            client_secret: CLIENT_SECRET
                    }
                        const res = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data),
                            {
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                }
                            }).then((r) => console.log(r.data))
                }}
        },
        []);

    const getCode = () => {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get('state') === state) {
            return (searchParams).get('code');
        }
    }


    const promptLogin = () => {
        window.location.href= "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID + "&response_type=code" + "&redirect_uri=" + REDIRECT_URI + "&show_dialogue=true&state=" + state;
    }

    return (
        <Button onClick={promptLogin}>Log in to Spotify</Button>
    );
}

export default LoginButton;