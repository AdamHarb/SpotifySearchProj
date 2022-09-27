import {Card} from "react-bootstrap";
import React from "react";

const AlbumCard = (props) => {
    const album = props.album;

        return (
            <Card className="albumClass mb-3 mx-1" key={album.id}>
                <Card.Img className="cardImg" src={album.images ? album.images[0].url : "#"}/>
                <Card.Body className="cardBody">
                    <Card.Title>
                        {album.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{album.artists[0].name}</Card.Subtitle>
                    <div className="albumInfo">
                        <Card.Text>Track count: {album.total_tracks}</Card.Text>
                        <Card.Text>{album.release_date}</Card.Text>
                    </div>
                </Card.Body>
                <ul className="list-group list-group-flush" id="card-bottom">
                    <li className="list-group-item"><a rel="noreferrer" href={album.external_urls.spotify} target="_blank">Preview on
                        Spotify</a></li>
                </ul>
            </Card>
        )

}

export default AlbumCard;