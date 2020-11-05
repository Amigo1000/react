import React from "react";

const clickHandler = () => {
  alert("You clicked!");
};

const Album = (props) => {
  const { img, title, artist, job } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <div>
        <img src={img} alt="" className="pageImage" />
        <h3>{title}</h3>
        <h4>{artist}</h4>
        <p>{job}</p>
        <button type="button" onClick={clickHandler}>
          Click me
        </button>
      </div>
    </article>
  );
};

export default Album;
