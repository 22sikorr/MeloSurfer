import { useState } from "react";
import { Container } from "semantic-ui-react";
import { ResultsList } from "./ResultsList.1";
const SearchSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState("song");
  const api_key = "888eb641278d28ae3d72014e71a52a80";
  const handlesearch = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setResults([]);
    if (selected === "song") {
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${inputValue}&api_key=${api_key}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.results.trackmatches.track.length; i++) {
            const element = data.results.trackmatches.track[i];
            setResults((prev) => [...prev, element]);
          }
          console.log(selected);
        });
    } else if (selected === "artist") {
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${inputValue}&api_key=${api_key}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.results.artistmatches.artist.length; i++) {
            const element = data.results.artistmatches.artist[i];
            setResults((prev) => [...prev, element]);
          }
        });
    } else if (selected === "album") {
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${inputValue}&api_key=${api_key}&format=json`
        
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.results.albummatches.album.length; i++) {
            const element = data.results.albummatches.album[i];
            setResults((prev) => [...prev, element]);
          }
        });
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSelect = (e) => {
    setSelected(e.target.value);
    setResults([]);
  };

  return (
    <>
      <Container>
        <section className="search-section">
          <h2>Znajdź nowe Utwory</h2>
          <form id="search-form">
            <label htmlFor="favorite-song">
              <select className="select" onChange={handleSelect}>
                <option value="song">Utwór</option>
                <option value="album">Album</option>
                <option value="artist">Artysta</option>
              </select>
              <input
                value={inputValue}
                onChange={handleChange}
                placeholder="Wyszukiwana fraza..."
              />
              <button type="submit" onClick={handlesearch}>
                Szukaj
              </button>
            </label>
          </form>

          <section className="results-section">
            <ul>
              <ResultsList selected={selected} results={results} />
            </ul>
          </section>
        </section>
      </Container>
    </>
  );
};

export default SearchSection;
