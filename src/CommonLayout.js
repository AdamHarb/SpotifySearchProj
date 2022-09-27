import React from "react";
import {Link} from "react-router-dom";

const CommonLayout = () => {
    return (
        <div className="header-background">
            <Link to="/SpotifySearchProj" className="title"><h1>Spotify Search</h1></Link>

        </div>
    )
}

export default CommonLayout;