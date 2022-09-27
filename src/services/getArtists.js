import React from 'react';
import Cookies from "js-cookie";
import axioscfg from "./axioscfg";

const axios = axioscfg();

export default async function getArtists(query){
    const res = await axios.get('https://api.spotify.com/v1/search', {
        params: {
            q: query,
            type: 'artist',
            limit: 20,
        }
    }).catch(error => {
        if (error === 401) {
            Cookies.set("spotifyAuthToken", undefined);
        }
        console.log(error)
    })
    return (res);
}
