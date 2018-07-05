import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.css";

const IndexPage = () => (
  <div className="home">
    <h1>Steve Stone</h1>
    <h2>
      Developer at
      <a href="https://downloadyouthministry.com"> Download Youth Ministry</a>
    </h2>
    <p>
      I make <a href="https://sidekick.tv">Sidekick</a>
    </p>
    <div className="social">
      <a href="https://github.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a href="https://dribbble.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "dribbble"]} />
      </a>
      <a href="https://medium.com/@steveostudios">
        <FontAwesomeIcon icon={["fab", "medium"]} />
      </a>
      <a href="https://vimeo.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "vimeo"]} />
      </a>
    </div>
  </div>
);

export default IndexPage;
