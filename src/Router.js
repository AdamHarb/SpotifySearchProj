import {BrowserRouter, Route, Routes} from "react-router-dom";
import Albums from "./Albums";
import Search from "./Search";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import CommonLayout from "./CommonLayout";
import {SpotifyApiContext} from "react-spotify-api";
import LoginButton from "./utils/auth";

const Router = () => {
    const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));

    useEffect(() => {
        setToken(Cookies.get("spotifyAuthToken"))
        Cookies.set('spotifyAuthToken', token)
    }, [token])

    return(
        <BrowserRouter>
            <CommonLayout />
            {token ?  <Routes>
                    <Route path="/albums/:id" element={<Albums />}></Route>
                    <Route path="/SpotifySearchProj" element={<Search />}></Route>
                    <Route path="/" element={<Search token={Cookies.get("spotifyAuthToken")}/>}></Route>
                </Routes> :
                <LoginButton />}

        </BrowserRouter>
    )
}

export default Router;