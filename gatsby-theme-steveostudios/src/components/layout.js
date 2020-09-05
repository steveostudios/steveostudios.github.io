import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import SocialList from "./social-list";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "steveostudios.jpg" }) {
        childImageSharp {
          fixed(width: 144, height: 144) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="layout">
      <header>
        <div className="logo">SS</div>
        <ul className="menu">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </header>
      <aside>
        <h1>Steve Stone</h1>
        <h2>Developer. Designer. Youth Worker. Nerd.</h2>
        <div className="avatar">
          <div className="swatch" />
          <Img
            className="headshot"
            fixed={data.file.childImageSharp.fixed}
            alt="headshot"
          />
        </div>
        <div className="location">
          <div>
            <svg
              height="128"
              viewBox="0 0 128 128"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m68.9329793 125.417448c36.3243767-52.6595419 43.0667917-58.0640701 43.0667917-77.4172954 0-26.5097024-21.490183-47.99988557-47.9998854-47.99988557-26.5097025 0-47.9998856 21.49018317-47.9998856 47.99988557 0 19.3532253 6.7424156 24.7577535 43.0667919 77.4172954 2.3835392 3.443352 7.482404 3.443596 9.8661874 0zm-4.9330937-57.4173431c-11.045628 0-19.9999524-8.9543244-19.9999524-19.9999523 0-11.045628 8.9543244-19.9999523 19.9999524-19.9999523 11.0456279 0 19.9999523 8.9543243 19.9999523 19.9999523 0 11.0456279-8.9543244 19.9999523-19.9999523 19.9999523z" />
            </svg>
          </div>
          <div>Louisville, KY</div>
        </div>

        <SocialList />
      </aside>
      <main>{children}</main>
      <footer>&copy;2020 steve stone</footer>
    </div>
  );
};

export default Layout;
