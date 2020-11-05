import React from "react";
import ReactDom from "react-dom";

//Css
import "./index.css";

const albums = [
  {
    img: "./kiss.jpg",
    title: "I Was Made For Lovin' You",
    artist: "Kiss",
  },
  {
    img: "./julio.jpg",
    title: " Quiereme Mucho",
    artist: "Julio Iglesias",
  },
  {
    img: "./art.jpg",
    title: "Bright Eyes",
    artist: "Art Garfunkel ",
  },
];

function BookList() {
  return (
    <div className="title">
      <Title />
      <section className="booklist">
        {albums.map((album) => {
          const { img, title, artist } = album;
          return (
            <div>
              <img src={img} alt="" className="pageImage" />
              <h3>{title}</h3>
              <h4>{artist}</h4>
            </div>
          );
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
  return <h1 className="pageTitle">Book List</h1>;
};

const Book = (props) => {
  const { job, age } = props;
  return (
    <article className="book">
      <Image />
      <BookTitle />
      <Author />
      <p>{job}</p>
      <p>{age}</p>
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
