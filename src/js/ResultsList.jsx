import { useState } from "react";
import { Tags } from "./Tags";

const ResultsList = ({ selected, results }) => {
  if (selected === "song") {
    return results.map((result, index) => (
      <>
        <h2>Wynik wyszukiwania utworow:</h2>
        <li style={{ marginBottom: 15 }} key={index}>
          {'Tytuł:' + '' + result.name}
          <br /> {'Wykonawca:' + '' + result.artist}
          <br />
        </li>
      </>
    ));
  } else if (selected === "artist") {
    return results.map((result, index) => (
      <>
        <h2>Wynik wyszukiwania artystow:</h2>
        <li style={{ marginBottom: 15 }} key={index}>
          Imię / Psudonim: <br />
          {result.name}
          <br />
          Słuchacze: {result.listeners}
          <br />
          <Tags itemName={result.name} />
          <svg></svg>
        </li>
      </>
    ));
  } else if (selected === "album") {
    return results.map((result, index) => (
      <>
        <h2>Wynik wyszukiwania albumow:</h2>
        <li style={{ marginBottom: 15 }} key={index}>
          Tytuł: {result.name}
          <br /> Wykonawca: {result.artist}
          <img src="src\assets\album.png" />
        </li>
      </>
    ));
  }
};
export default ResultsList;
