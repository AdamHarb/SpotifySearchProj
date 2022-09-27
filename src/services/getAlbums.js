import React from 'react';
import Cookies from "js-cookie";
import axioscfg from "./axioscfg";

const axios = axioscfg();

export default async function getAlbums(query){
    const res = await axios.get('artists/' + query + '/albums', {
        params: {
            id: query,
            include_groups: 'album,single',
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
