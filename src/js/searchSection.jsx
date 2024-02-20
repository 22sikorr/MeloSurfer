import { useEffect, useState } from "react";


import { ResultsList } from "./ResultsList.1";
const SearchSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState("track");
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {

    const fetchAccessToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials&client_id=4b3aeac0ed8a45b5b54301393fc14952&client_secret=7d7b04e074a940d091c88e98dbe7fb31",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setAccessToken(data.access_token);
        console.log(data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };
    fetchAccessToken();
  }, []);

  const handlesearch = (e) => {
    e.preventDefault();

    setResults([]);

    fetch(
      `https://api.spotify.com/v1/search?q=${inputValue}&type=${selected}&market=PL`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.artists.items[0].images[1].url);
        if (selected === "track") {
          setResults(data.tracks.items);
        } else if (selected === "artist") {
          setResults(data.artists.items);
        } else if (selected === "album") {
          setResults(data.albums.items);
        }
      });
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
      <div className="container">
        <section className="search-section">
          <h2>Znajdź nowe Utwory</h2>
          <form id="search-form">
            <label htmlFor="favorite-song">
              <select className="select" onChange={handleSelect}>
                <option value="track">Utwór</option>
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

              {results && <ResultsList selected={selected} results={results} />}
            </ul>
          </section>
        </section>
      </div>
    </>
  );
};

export default SearchSection;
