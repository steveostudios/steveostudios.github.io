import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import avatar from "./../images/avatar_Steveostudios.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDribbble,
  faMedium,
  faVimeo
} from "@fortawesome/free-brands-svg-icons";

library.add(faStroopwafel, faGithub, faDribbble, faMedium, faVimeo);

import "./index.css";

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem",
      borderBottom: "1px solid #cecece",
      fontFamily: "sans-serif"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <div
        style={{
          display: "flex",
          margin: 0,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex", margin: 0, alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontWeight: 100,
              color: "#333"
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                height: "40px",
                marginBottom: 0,
                marginRight: "1rem"
              }}
              src={avatar}
            />
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontWeight: 100,
              color: "#333"
            }}
          >
            <div>Hi, I'm Steve</div>
          </Link>
        </div>
        <div>
          <Link
            to="/bookshelf"
            style={{
              textDecoration: "none",
              fontWeight: 100,
              color: "#333"
            }}
          >
            Bookshelf
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Steveostudios"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
