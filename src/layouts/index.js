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
  faMedium,
  faVimeo,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faStar, faTwitter, faGithub, faDribbble, faMedium, faVimeo);

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
    <script src="./../../node_modules/gitgraph/build/gitgraph.min.js" />;
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
