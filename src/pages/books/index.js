import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withPrefix } from "gatsby-link";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import books from "./../../data/books";
import "./style.css";

class BookshelfPage extends React.Component {
  renderBook(book, i) {
    return (
      <div className="book" key={i}>
        <OutboundLink href={book.url}>
          <img src={withPrefix(book.image)} />
        </OutboundLink>
        <OutboundLink
          href={book.url}
          style={{ textDecoration: "none", fontWeight: "400" }}
        >
          <h3>{book.title}</h3>
        </OutboundLink>
        <p>{book.subtitle}</p>
        <p>{book.author}</p>
        {this.renderStars(book.stars, book.review)}
      </div>
    );
  }

  renderStars(stars, review) {
    if (stars) {
      const count = Array.apply(null, Array(stars));
      return (
        <p className="stars">
          {this.renderReview(review)}
          {count.map((star, i) => <FontAwesomeIcon icon="star" size="xs" />)}
        </p>
      );
    } else {
      return <p>not rated</p>;
    }
  }

  renderReview(review) {
    return !review ? null : <div className="review">{review}</div>;
  }

  render() {
    return (
      <div className="bookshelf">
        <h1>2018</h1>
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
            .map((book, i) => this.renderBook(book, i))}
        </div>
        <h1>2017</h1>
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
            .map((book, i) => this.renderBook(book, i))}
        </div>
        <h1>2016</h1>
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
            .map((book, i) => this.renderBook(book, i))}
        </div>
      </div>
    );
  }
}

export default BookshelfPage;
