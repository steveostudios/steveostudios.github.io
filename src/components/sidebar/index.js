import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar">
    <div className="about">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <div className="nav nav-full">
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "home"]} />
        </Link>
        <Link to="/about/">
          <FontAwesomeIcon icon={["fas", "user-circle"]} />
        </Link>
        <Link to="/books/">
          <FontAwesomeIcon icon={["fas", "book-open"]} />
        </Link>
        <Link to="/blog/">
          <FontAwesomeIcon icon={["fas", "rss"]} />
        </Link>
      </div>
      <h1>
        <Link to="/">
          <span>Hi.</span>
          <span>I'm Steve.</span>
        </Link>
        <div className="nav nav-mobile">
          <Link to="/">
            <FontAwesomeIcon icon={["fas", "home"]} />
          </Link>
          <Link to="/about/">
            <FontAwesomeIcon icon={["fas", "user-circle"]} />
          </Link>
          <Link to="/books/">
            <FontAwesomeIcon icon={["fas", "book-open"]} />
          </Link>
          <Link to="/blog/">
            <FontAwesomeIcon icon={["fas", "rss"]} />
          </Link>
        </div>
      </h1>

      <div className="meta">
        <h2>
          <span>Developer.</span>
          <span>Designer.</span>
          <span>Youth Worker.</span>
          <span>Nerd.</span>
        </h2>
        <div className="details">
          <div className="social">
            <a className="twitter" href="https://twitter.com/steveostudios">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a className="github" href="https://github.com/steveostudios">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a className="dribbble" href="https://dribbble.com/steveostudios">
              <FontAwesomeIcon icon={["fab", "dribbble"]} />
            </a>
            <a className="vimeo" href="https://vimeo.com/steveostudios">
              <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
            </a>
          </div>
        </div>
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
