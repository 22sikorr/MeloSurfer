import { useState, useEffect } from "react";

export const Tags = (itemName) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const text = itemName;
    const array = text.split(" ");
    const name = array.join("+");
    console.log(name);
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getTags&artist=${name}&user=RJ&api_key=888eb641278d28ae3d72014e71a52a80&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.tags.tag);
      });
  }, []);

  return (
    <>
      <div>
        {tags.map((tag, index) => (
          <p key={index}>{tag.name}</p>
        ))}
      </div>
    </>
  );
};
