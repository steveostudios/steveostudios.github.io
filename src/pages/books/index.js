import * as PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import SEO from "../../components/seo";
import Image from "gatsby-image";
import "./style.css";

class BookshelfPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allPostsJson: PropTypes.object
    })
  };

  renderBook(book, i) {
    return (
      <div className="book" key={i}>
        {book.bigImage !== null ? (
          <Image fixed={{ ...book.bigImage.childImageSharp.big }} />
        ) : null}
        {book.progress !== null ? (
          <div className="progress-bar">
            <span style={{ width: 100 * (book.progress / book.total) + "%" }} />
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
    let { allBooksJson } = this.props.data;
    const books = allBooksJson.edges
      .map(e => e.node)
      .filter(item => item.dateStart !== null);
    const years = this.groupByArray(books, "dateFinish");
    const current = books.filter(item => item.progress !== null);
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

export const pageQuery = graphql`
  query {
    allBooksJson {
      edges {
        node {
          title
          author
          dateFinish
          progress
          total
          bigImage: image {
            childImageSharp {
              big: fluid(maxHeight: 200) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
