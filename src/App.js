import './App.css';
import React, {useState, useEffect} from "react";
import LoginButton from "./utils/auth";
import Cookies from "js-cookie";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Albums from "./Albums";
import Search from "./Search";
import Router from "./Router";
import {SpotifyApiContext} from "react-spotify-api";

function App() {

  return (
    <div className="App">
        <Router />
    </div>
  );
}

export default App;

