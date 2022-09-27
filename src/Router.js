import {BrowserRouter, Route, Routes} from "react-router-dom";
import Albums from "./Albums";
import Search from "./Search";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import CommonLayout from "./CommonLayout";
import {SpotifyApiContext} from "react-spotify-api";
import LoginButton from "./utils/auth";
import {useParams} from "react-router-dom";

const Router = () => {
    const [token, setToken] = useState(Cookies.get("spotifyAuthToken"))

    useEffect(() => {
            setToken(Cookies.get("spotifyAuthToken"));
    }, [])

    return(
        <BrowserRouter>
            <CommonLayout />
            {!(token === "undefined" || token===undefined) ? (
                    <Routes>
                        <Route path="/" element={<Search />}></Route>
                        <Route path="/#access_token=:" element={<Search />}></Route>
                        <Route path="/albums/:id" element={<Albums />}></Route>
                    </Routes> ):
                <LoginButton />}
        </BrowserRouter>
    )
}

export default Router;