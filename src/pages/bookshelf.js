import React from "react";
import Link from "gatsby-link";

import { withPrefix } from "gatsby-link";
import books from "./../data/books";
import "./bookshelf.css";

class BookshelfPage extends React.Component {
  renderBook(book) {
    return (
      <div className="book">
        <a href={book.url}>
          <img src={withPrefix(book.image)} />
        </a>
        <a
          href={book.url}
          style={{ textDecoration: "none", fontWeight: "400" }}
        >
          <h3>{book.title}</h3>
        </a>
        <p>{book.subtitle}</p>
        <p>{book.author}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="bookshelf">
        <h2>2018</h2>
        <div className="books">
          {books
            .sort((a, b) => {
              var dateA = new Date(a.dateStart);
              var dateB = new Date(b.dateStart);
              return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
            })
            .filter(book => {
              return new Date(book.dateStart).getFullYear() === 2018;
            })
            .map(book => this.renderBook(book))}
        </div>
        <h2>2017</h2>
        <div className="books">
          {books
            .sort((a, b) => {
              var dateA = new Date(a.dateStart);
              var dateB = new Date(b.dateStart);
              return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
            })
            .filter(book => {
              return new Date(book.dateStart).getFullYear() === 2017;
            })
            .map(book => this.renderBook(book))}
        </div>
        <h2>2016</h2>
        <div className="books">
          {books
            .sort((a, b) => {
              var dateA = new Date(a.dateStart);
              var dateB = new Date(b.dateStart);
              return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
            })
            .filter(book => {
              return new Date(book.dateStart).getFullYear() === 2016;
            })
            .map(book => this.renderBook(book))}
        </div>
      </div>
    );
  }
}

export default BookshelfPage;
