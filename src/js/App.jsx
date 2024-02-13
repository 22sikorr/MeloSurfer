import { createRoot } from "react-dom/client";
import { useState } from "react";
const api_key = "888eb641278d28ae3d72014e71a52a80";
const root = createRoot(document.getElementById("root"));

const SimilarSongsList = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

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
          setResults((prev => [...prev, element]));
        }
        console.log(results);
      });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <section className="search-section">
        <h2>Znajdź nowe Utwory</h2>
        <form id="search-form">
          <label htmlFor="favorite-song">
            Wprowadź nazwę ulubionego utworu lub artysty:
          <input value={inputValue} onChange={handleChange} />
          <button type="submit" onClick={handlesearch}>
            Szukaj
          </button>
          </label>
        </form>

        <section className="results-section">
          <h2>Podobne utwory</h2>
          <ul>
            {
              results.map((result, index) => <li style={{marginBottom: 15,}} key={index}>Tytuł:{result.name}<br/> Wykonawca: {result.artist}</li>)
            }
            
          </ul>
        </section>
      </section>
    </>
  );
};
root.render(<SimilarSongsList />);
