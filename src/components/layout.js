import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Sidebar from "./sidebar";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            // margin: `0 auto`,
            maxWidth: 960,
            width: "60%",
            left: "40%",
            position: "relative",
            paddingTop: 0,
            backgroundColor: "#005ba9",
            color: "#f3f3f3",
            fontFamily: "Biryani"
          }}
        >
          <main> {children} </main>
          <footer>©{new Date().getFullYear()} steveostudios</footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
