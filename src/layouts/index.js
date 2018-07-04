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
import "./overrides.css";
import "./header.css";
import "./main.css";

const Header = () => (
  <div className="header">
    <Link className="mark" to="/">
      <img src={avatar} />
      <div>Hi, I'm Steve</div>
    </Link>
    <Link to="/bookshelf">Bookshelf</Link>
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
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
