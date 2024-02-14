import { useState } from "react";
import { Container } from "semantic-ui-react";
const SearchSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const api_key = "888eb641278d28ae3d72014e71a52a80";
  const handlesearch = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setResults([]);
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${inputValue}&api_key=${api_key}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.results.trackmatches.track.length; i++) {
          const element = data.results.trackmatches.track[i];
          setResults((prev) => [...prev, element]);
        }
        console.log(results);
      });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
    <Container>
      <section className="search-section">
        <h2>Znajdź nowe Utwory</h2>
        <form id="search-form">
          <label htmlFor="favorite-song">
            
            <input value={inputValue} onChange={handleChange} placeholder="Wprowadź nazwę ulubionego utworu lub artysty:"/>
            <button type="submit" onClick={handlesearch}>
              Szukaj
            </button>
          </label>
        </form>
        <h2>Podobne utwory:</h2>
      <section className="results-section">
        <ul>
          {results.map((result, index) => (
            <li style={{ marginBottom: 15 }} key={index}>
              Tytuł:{result.name}
              <br /> Wykonawca: {result.artist}
            </li>
          ))}
        </ul>
      </section>
      </section>
    </Container>

    </>
  );
};
export default SearchSection;
