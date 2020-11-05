import React from "react";
import ReactDom from "react-dom";

//Css
import "./index.css";

const albums = [
  {
    img: "./img/kiss.jpg",
    title: "I Was Made For Lovin' You",
    artist: "Kiss",
  },
  {
    img: "./img/julio.jpg",
    title: " Quiereme Mucho",
    artist: "Julio Iglesias",
  },
  {
    img: "./img/art.jpg",
    title: "Bright Eyes",
    artist: "Art Garfunkel ",
  },
  {
    img: "./img/abba.jpg",
    title: "Chiquitita",
    artist: "Abba",
  },
];

function BookList() {
  return (
    <div className="title">
      <Title />
      <section className="booklist">
        {albums.map((album) => {
          const { img, title, artist } = album;
          return <Book key={album.title} {...album}></Book>;
        })}
        {/* <Book job="Developer" age={54} />
        <Book job="Cook" age={34} />
        <Book />
        <Book />
        <Book />
        <Book /> */}
      </section>
    </div>
  );
}

const Title = () => {
  return <h1 className="pageTitle">Book & Album List</h1>;
};

const Book = (props) => {
  const { img, title, artist } = props;
  return (
    <article className="book">
      <div>
        <img src={img} alt="" className="pageImage" />
        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>
    </article>
  );
};

const Image = () => (
  <img src="https://image.shutterstock.com/image-photo/image-150nw-737761441.jpg" />
);

const BookTitle = () => {
  return <p className="postTitle">The night of Halloween</p>;
};

const Author = () => {
  return <p>Sito Demmers</p>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
