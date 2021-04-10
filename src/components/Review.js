import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    return number < 0
      ? people.length - 1
      : number > people.length - 1
      ? 0
      : number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };

  const randomPerson = () => {
    let randomNumner = Math.floor(Math.random() * people.length);
    if (randomNumner === index) {
      randomNumner += 1;
    }
    setIndex(checkNumber(randomNumner));
  };

  return (
    <article className="review">
      <div className="image-container">
        <img src={image} alt={name} className="person-image" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">
        <span className="quote-icon">
          <FaQuoteLeft className="icon" />
        </span>
        {text}
        <span className="quote-icon">
          <FaQuoteRight className="icon" />
        </span>
      </p>
      <div className="button-container">
        <button className="btn btn-left" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="btn btn-right" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn surprise-me" onClick={randomPerson}>suprise me</button>
    </article>
  );
}

export default Review;
