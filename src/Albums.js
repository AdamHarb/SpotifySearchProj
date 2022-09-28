import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import getAlbums from "./services/getAlbums";
import {useState, useEffect} from "react";
import AlbumCard from "./components/AlbumCard";
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";


const Albums = () => {
    const [albums, setAlbums] = useState([])
    const {id} = useParams();
    const [artist, setArtist] = useState("");
    const [loading, setLoading] = useState("true");


    const mapAlbums = (id) => {
        let data = getAlbums(id).then((data) => {
            setAlbums(data.data.items)
            try {
                setArtist(data.data.items[0].artists[0].name);
            }catch (e) {
                setLoading("false")
            }
            setLoading("false")
        }).catch(e => {
            if (e === 401) {
                Cookies.set("spotifyAuthToken", undefined);
            }
           console.log(e)
        });
    }

    mapAlbums(id);

    return (
        <Container>
            <header className="albumHeader">
                <div className="textColumn">
                    <h1>{artist}</h1>
                    <h2 className="mb-2 text-muted">Albums</h2>
                </div>
                    <Link to='/SpotifySearchProj'><Button className="btn-lg backButton">Back</Button></Link>
            </header>
            {
                artist ? (
                    <Row className="row mx-0" id="cardContainer">
                        {albums.map((album) => {
                            return(
                                <AlbumCard album={album} key={album.id}/>
                            );
                        })}
                    </Row>
                ) : (
                    (loading === "true") ? (
                        <h1>Loading...</h1>
                    ) : (
                        <h1>No albums found.</h1>
                    )
                )
            }
        </Container>
    );
}

export default Albums;