export const ResultsList = ({ selected, results }) => {
  
  if (selected === "track") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Tytuł:{result.name}
        <br /> Wykonawca: {result.artists[0].name}
      </li>
    ));
  } else if (selected === "artist") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Imię / Psudonim: <br />
        {result.name}
        <br />
        Słuchacze: {result.followers.total}
        <br />
        <img
          style={{ width: 100, height: 100 }}
          src={result.images[1].url}
          alt="avatar artysty"
        />
      </li>
    ));
  } else if (selected === "album") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Tytuł:{result.name}
        <br /> Wykonawca: {result.artists[0].name}
      </li>
    ));
  }
};
