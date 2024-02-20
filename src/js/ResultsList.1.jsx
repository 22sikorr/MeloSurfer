export const ResultsList = ({ selected, results }) => {
  //console.log(results[0].images[1].url);
  if (selected === "track") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
       <div className="textContainer"><span>{result.name}</span>
        <br/> <span>{result.artists[0].name}</span></div>
        <img
          style={{ width: 230, height: 230 }}
          src={result.album.images[1].url}
          alt="track image"
        />
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
        {/* <img
          style={{ width: 100, height: 100 }}
          src={result.artists.images[0].url}
          alt="artist image"
        /> */}
      </li>
    ));
  } else if (selected === "album") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15, backgroundImage: result.images[1].url}} key={index}>
        <div className="textContainer">

        {result.name}
        <br /> {result.artists[0].name}
        </div>
        <img
          style={{ width: 230, height: 230 }}
          src={result.images[1].url}
          alt="album image"
        />
      </li>
    ));
  }
};
