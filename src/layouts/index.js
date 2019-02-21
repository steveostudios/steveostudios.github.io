import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Background from "./Background";
import Header from "./Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDribbble,
  faMediumM,
  faVimeoV,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faStar, faTwitter, faGithub, faDribbble, faMediumM, faVimeoV);

import "./index.css";
import "./overrides.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Steveostudios"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Background />
    <Header />
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
