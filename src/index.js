import React from "react";
import ReactDom from "react-dom";

//Css
import "./index.css";

function BookList() {
  return (
    <div className="title">
      <Title />
      <section className="booklist">
        <Book job="Developer" age={54} />
        <Book job="Cook" age={34} />
        <Book />
        <Book />
        <Book />
        <Book />
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
