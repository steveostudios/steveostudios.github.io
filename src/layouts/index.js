import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import logo from "./../images/logo.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDribbble,
  faMedium,
  faVimeo
} from "@fortawesome/free-brands-svg-icons";

library.add(faStar, faGithub, faDribbble, faMedium, faVimeo);

import "./index.css";
import "./overrides.css";
import "./header.css";
import "./main.css";

const Header = () => (
  <div className="header">
    <Link className="mark" to="/">
      <img src={logo} />
    </Link>
    <Link to="/books">Books</Link>
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
    <div className="shape-1" />
    <div className="shape-2" />
    <div className="shape-3" />
    <div className="shape-4" />
    <div className="shape-5" />
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
