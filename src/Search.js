import {Button, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import ArtistCard from "./components/ArtistCard";
import React, {useState} from "react";
import getArtists from "./services/getArtists";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [artists, setArtist] = useState([]);

    const mapArtists = () => {
        getArtists(searchInput).then(data =>
            {
                    setArtist(data.data.artists.items)
            }
        ).catch(e => {
            console.log(e);
        });
    }
    return(

        <Container>
            <InputGroup className="mb-3 mt-3" size="lg">
                <FormControl
                    placeholder="Search for an artist..."
                    type="input"
                    onKeyUp={event => {
                        mapArtists();
                    }}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <Button onClick={mapArtists}>
                    Search
                </Button>
            </InputGroup>

            <Row className="mx-0 row row-cols-5" id="cardContainer">

                {artists.map((artist, key) => {
                    return (
                        <ArtistCard artist={artist} key={key}/>
                    );
                })}
            </Row>
        </Container>
    )
}

export default Search;