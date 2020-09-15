import React from "react";
import Img from "gatsby-image";
import "./book-list.css";

const BookList = ({ books }) => {
  const booksByYear = books
    .filter((book) => book.dateFinish)
    .sort((a, b) => new Date(b.dateFinish) - new Date(a.dateFinish))
    .reduce((acc, cur) => {
      console.log(acc[cur["dateFinish"]]);
      acc[new Date(cur["dateFinish"]).getFullYear()] = [
        ...(acc[new Date(cur["dateFinish"]).getFullYear()] || []),
        cur,
      ];
      return acc;
    }, {});

  return (
    <>
      <ul className="book-list">
        <li>
          <h5>Currently Reading</h5>
          <ul className="book-list-year">
            {books
              .filter((book) => !book.dateFinish)
              .map((book) => (
                <li key={book.id} className="book">
                  <Img
                    fluid={book.image.childImageSharp.fluid}
                    alt={book.title}
                  />
                  <div className="progress-bar">
                    <span
                      style={{
                        width: 100 * (book.progress / book.pages) + "%",
                      }}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </li>
        {Object.entries(booksByYear)
          .reverse()
          .map(([year, books]) => (
            <li key={year} className="year">
              <h5>
                {year}
                <span>books {books.length}</span>
                <span>
                  pages{" "}
                  {books
                    .map((book) => book.pages)
                    .reduce((acc, cur) => acc + cur)}
                </span>
              </h5>
              <ul className="book-list-year">
                {books.map((book) => (
                  <li key={book.id} className="book">
                    <Img
                      fluid={book.image.childImageSharp.fluid}
                      alt={book.title}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};

export default BookList;
