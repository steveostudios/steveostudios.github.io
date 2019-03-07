import React from "react";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import SEO from "../../components/seo";
import { withPrefix } from "gatsby-link";
import books from "./../../data/books";
import "./style.css";

class BookshelfPage extends React.Component {
  renderBook(book, i) {
    return (
      <div className="book" key={i}>
        <img src={withPrefix(book.image)} alt={book.title} />
        {book.hasOwnProperty("progress") ? (
          <div class="progress-bar">
            <span style={{ width: 100 * book.progress + "%" }} />
          </div>
        ) : null}
        <h3> {book.title} </h3> <p> {book.author} </p>
      </div>
    );
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
    const current = books.filter(item => item.hasOwnProperty("progress"));
    return (
      <Layout>
        <SEO title="Books" />
        <div className="main-container reading">
          <div className="main-contents">
            <div className="bookshelf">
              <div className="currently-reading">
                <h1> /_currently_reading</h1>
                <div className="books">
                  {current.map((book, i) => this.renderBook(book, i))}
                </div>
              </div>
              {years.map((item, i) => (
                <div key={i}>
                  <h1> /_{item.key} </h1>
                  <div className="books">
                    {item.values.map((book, i) => this.renderBook(book, i))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default BookshelfPage;
