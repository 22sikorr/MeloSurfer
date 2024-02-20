export const ResultsList = ({ selected, results }) => {
  //console.log(results[0].images[1].url);
  if (selected === "track") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Tytuł: <br/> <span>{result.name}</span>
        <br /> Wykonawca:<br/> <span>{result.artists[0].name}</span>
      </li>
    ));
  } else if (selected === "artist") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Imię / Psudonim: <br />
        <span>{result.name}</span>
        <br />
        Słuchacze: <br /> <span>{result.followers.total}</span>
        <br />
      </li>
    ));
  } else if (selected === "album") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15, backgroundImage: result.images[1].url}} key={index}>
        Tytuł:{result.name}
        <br /> Wykonawca: {result.artists[0].name}
        <img
          style={{ width: 100, height: 100 }}
          src={result.images[1].url}
          alt="album image"
        />
      </li>
    ));
  }
};
