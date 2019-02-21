import React from "react";
// import Link from "link";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withPrefix } from "gatsby-link";
// import { OutboundLink } from "gatsby-plugin-google-analytics";
import books from "./../../data/books";
import "./style.css";

class BookshelfPage extends React.Component {
  renderBook(book, i) {
    return (
      <div className="book" key={i}>
        <img src={withPrefix(book.image)} />
        <h3> {book.title} </h3>
        <p> {book.subtitle} </p> <p> {book.author} </p>
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
          {count.map((star, i) => (
            <div icon="star" size="xs" />
          ))}
        </p>
      );
    } else {
      return <p> not rated </p>;
    }
  }

  renderReview(review) {
    return !review ? null : <div className="review"> {review} </div>;
  }

  groupByArray(xs, key) {
    return xs
      .filter(book => book.dateFinish)
      .sort((a, b) => new Date(b.dateFinish) - new Date(a.dateFinish))
      .reduce(function(rv, x) {
        let v = key instanceof Function ? key(x) : x[key];
        let el = rv.find(r => r && r.key === new Date(v).getFullYear());
        if (el) {
          el.values.push(x);
        } else {
          rv.push({
            key: new Date(v).getFullYear(),
            values: [x]
          });
        }
        return rv;
      }, []);
  }

  render() {
    const years = this.groupByArray(books, "dateFinish");
    return (
      <Layout>
        <SEO title="Books" />
        <div className="bookshelf">
          {years.map((item, i) => (
            <div>
              <h1> {item.key} </h1>
              <div className="books">
                {item.values.map((book, i) => this.renderBook(book, i))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default BookshelfPage;
