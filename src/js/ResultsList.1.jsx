export const ResultsList = ({ selected, results }) => {
  if (selected === "song") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Tytuł:{result.name}
        <br /> Wykonawca: {result.artist}
      </li>
    ));
  } else if (selected === "artist") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Imię / Psudonim: <br />
        {result.name}
        <br />
        Słuchacze: {result.listeners}
        <br />
        <img src={result.image[1].text} />
      </li>
    ));
  } else if (selected === "album") {
    return results.map((result, index) => (
      <li style={{ marginBottom: 15 }} key={index}>
        Tytuł:{result.name}
        <br /> Wykonawca: {result.artist}
      </li>
    ));
  }
};
