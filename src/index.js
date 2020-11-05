import React from "react";
import ReactDom from "react-dom";

//Css
import "./index.css";

import { Albums } from "./Albums";
import Album from "./Album";

function AlbumList() {
  return (
    <div className="title">
      <Title />
      <section className="booklist">
        {Albums.map((album) => {
          const { img, title, artist } = album;
          return <Album key={album.title} {...album}></Album>;
        })}
      </section>
    </div>
  );
}

const Title = () => {
  return <h1 className="pageTitle">Book & Album List</h1>;
};

ReactDom.render(<AlbumList />, document.getElementById("root"));
