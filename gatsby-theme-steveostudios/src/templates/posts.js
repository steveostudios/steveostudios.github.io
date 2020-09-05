import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import "./posts.css";

const PostsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <ul className="posts">
        {data.allMarkdownRemark.nodes.map((post) => (
          <li key={`../${post.fields.slug}`}>
            <Link to={`../${post.fields.slug}`}>
              <div>
                <h3>{post.frontmatter.title}</h3>
              </div>
              <div> {post.frontmatter.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PostsTemplate;
