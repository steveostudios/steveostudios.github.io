import React from "react";
import Link from "gatsby-link";
import logo from "./../../images/logo.png";

import "./style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link className="mark" to="/">
          <img src={logo} />
        </Link>
        <Link to="/books">Books</Link>
      </div>
    );
  }
}

export default Header;
