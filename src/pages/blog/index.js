import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../components/footer";

import "./style.css";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="main-container blog-all">
          <div className="main-contents">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug} className="post">
                  <Link to={node.fields.slug}>
                    <h1>{title}</h1>
                    <small>{node.frontmatter.date}</small>
                  </Link>
                </div>
              );
            })}
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
