import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import BookList from "../components/book-list";

const BooksTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allBooksYaml(sort: { fields: dateFinish, order: DESC }) {
        nodes {
          dateFinish
          subtitle
          progress
          pages
          id
          title
          author
          url
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const books = data.allBooksYaml.nodes;

  return (
    <Layout>
      <BookList books={books} />
    </Layout>
  );
};

export default BooksTemplate;
