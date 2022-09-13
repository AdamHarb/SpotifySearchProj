import './App.css';
import React from 'react';
import SearchBar from "./components/SearchBar";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div className="App">
    <h1 id="title" >Spotify Search</h1>
      <LoginButton></LoginButton>
    </div>
  );
}

export default App;