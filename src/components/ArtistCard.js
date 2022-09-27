import {Card} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";
import React from "react";
import {Link} from "react-router-dom";

const ArtistCard = (props) => {
    const {artist, mapAlbums} = props;
        return (
            <Card className="card mb-3 mx-1" key={artist.id}>
                <Card.Img className="cardImg" src={typeof artist.images[0] === "undefined" ? '#' : artist.images[0].url}/>
                <Card.Body className="artistBody">
                    <Card.Title>
                        {artist.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{artist.genres.length ? "Genre: " + artist.genres[0] : ""}</Card.Subtitle>
                        <Card.Text className="follower-text">Followers: {Number(artist.followers.total).toLocaleString()}</Card.Text>
                    <Rating ratingValue={artist.popularity} readonly={true}></Rating>
                </Card.Body>
                <Link className="stretched-link" to={`/SpotifySearchProj/albums/${artist.id}`}>   </Link>
            </Card>

        )
}

export default ArtistCard;