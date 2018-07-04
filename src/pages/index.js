import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexPage = () => (
  <div
    style={{
      marginTop: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <h1
      style={{
        color: "#3c3c3c",
        fontSize: "2rem",
        fontWeight: 100
      }}
    >
      Steve Stone
    </h1>
    <p style={{ color: "#9c9c9c" }}>Developer at Download Youth Ministry</p>
    <div style={{ display: "flex" }}>
      <a
        style={{ margin: "1rem", fontSize: "2rem", color: "#3f3f3f" }}
        href="https://github.com/steveostudios"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a
        style={{ margin: "1rem", fontSize: "2rem", color: "#3f3f3f" }}
        href="https://dribbble.com/steveostudios"
      >
        <FontAwesomeIcon icon={["fab", "dribbble"]} />
      </a>
      <a
        style={{ margin: "1rem", fontSize: "2rem", color: "#3f3f3f" }}
        href="https://medium.com/@steveostudios"
      >
        <FontAwesomeIcon icon={["fab", "medium"]} />
      </a>
      <a
        style={{ margin: "1rem", fontSize: "2rem", color: "#3f3f3f" }}
        href="https://vimeo.com/steveostudios"
      >
        <FontAwesomeIcon icon={["fab", "vimeo"]} />
      </a>
    </div>
  </div>
);

export default IndexPage;
