import axios from "axios";
import Cookies from "js-cookie";
import toast from "bootstrap/js/src/toast";
import {Toast, ToastBody} from "react-bootstrap";
import { Navigate } from 'react-router-dom';

const axioscfg = () => {
    const token = Cookies.get("spotifyAuthToken");

    const instance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
    });

    instance.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                Cookies.set('spotifyAuthToken', "")
                return(
                    <Navigate to="/" />
                )
            }
            console.log(error)
        });

    return (instance)
}

export default axioscfg;