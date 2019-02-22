import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Sidebar from "./sidebar";
import "./layout.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faDribbble,
  faMediumM,
  faVimeoV,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faDribbble, faMediumM, faVimeoV, faTwitter);

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
      <div>
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <main> {children} </main>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
