import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar">
    <div className="about">
      <h1>
        <Link to="/">Hi. I'm Steve.</Link>
      </h1>
      <p>Developer at DYM. Living in Kentucky. I make Sidekick.</p>
      <div className="social">
        <a href="https://twitter.com/steveostudios">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="https://github.com/steveostudios">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://dribbble.com/steveostudios">
          <FontAwesomeIcon icon={["fab", "dribbble"]} />
        </a>
        <a href="https://medium.com/steveostudios">
          <FontAwesomeIcon icon={["fab", "medium-m"]} />
        </a>
        <a href="https://vimeo.com/steveostudios">
          <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
        </a>
      </div>
      <div className="links">
        <Link to="/books/">Books</Link>
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string
};

Sidebar.defaultProps = {
  siteTitle: ``
};

export default Sidebar;
