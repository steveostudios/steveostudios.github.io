import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../components/footer";

import "./style.css";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <div className="main-container blog-single">
          <div className="main-contents">
            <div className="blog-header">
              <h1>{post.frontmatter.title}</h1>
              <small>{post.frontmatter.date}</small>
              <hr />
            </div>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="pagination">
              {previous && (
                <div className="prev">
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </div>
              )}
              {next && (
                <div className="next">
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
