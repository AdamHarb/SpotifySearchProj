import {useState, useEffect} from "react";
import {encode as base64_encode} from 'base-64';
import {Button} from "react-bootstrap";

const axios = require('axios').default;

// const genRand = (len) => { // Function used to create the unique state
//     return Math.random().toString(36).substring(2,len+2);
// }

const LoginButton = () => {
    const CLIENT_ID="";
    const CLIENT_SECRET="";
    const REDIRECT_URI="http://localhost:3000/";
    let state= "esrgniouhrsy";
    let code=null;

    useEffect( () => {
            const searchParams = new URLSearchParams(window.location.search);
            if (searchParams.has('code')) {
                postReq().then(r => (console.log('Requested.')));
                async function postReq() {
                    code = getCode();
                    try {

                        const res = await axios.post('https://accounts.spotify.com/api/token', {
                                code: code,
                                redirect_uri: REDIRECT_URI,
                                grant_type: "authorization_code",
                            },
                            {
                                headers: {

                                    'Authorization': 'Basic' + (base64_encode(CLIENT_ID + ':' + CLIENT_SECRET)),
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            }).then((r) => console.log(r.data))
                    } catch (error) {
                        console.log(error);

                        if (error.response.status === 400) {
                            console.log(`HTTP 400 error occurred`);
                        }
                        // You can get response data (mostly the reason would be in it)
                        if (error.response.data) {
                            console.log(error.response.data);
                        }
                    }
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