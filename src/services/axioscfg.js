import axios from "axios";
import Cookies from "js-cookie";

const axioscfg = () => {
    const token = Cookies.get("spotifyAuthToken");

    const instance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization : `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    instance.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                if (token === "" || token === undefined)
                    window.location.href='/SpotifySearchProj';
                console.log(error)
            }
            console.log(error)
        });

    return (instance);
}

export default axioscfg;