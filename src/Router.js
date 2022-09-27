import {BrowserRouter, Route, Routes} from "react-router-dom";
import Albums from "./Albums";
import Search from "./Search";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import CommonLayout from "./CommonLayout";
import LoginButton from "./utils/auth";

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
                        <Route path="/SpotifySearchProj/" element={<Search />}></Route>
                        <Route path="/SpotifySearchProj/#access_token=:" element={<Search/>}></Route>
                        <Route path="/SpotifySearchProj/albums/:id" element={<Albums />}></Route>
                    </Routes> ):
                <LoginButton />}
        </BrowserRouter>
    )
}

export default Router;