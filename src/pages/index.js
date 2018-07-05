import React from "react";
import Link from "gatsby-link";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.css";

const IndexPage = () => (
  <div className="home">
    <h1>Steve Stone</h1>
    <h2>
      Developer at
      <OutboundLink href="https://downloadyouthministry.com">
        {" "}
        Download Youth Ministry
      </OutboundLink>
    </h2>
    <p>
      I make <OutboundLink href="https://sidekick.tv">Sidekick</OutboundLink>
    </p>
    <div className="social">
      <OutboundLink href="https://github.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </OutboundLink>
      <OutboundLink href="https://dribbble.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "dribbble"]} />
      </OutboundLink>
      <OutboundLink href="https://medium.com/@steveostudios">
        <FontAwesomeIcon icon={["fab", "medium"]} />
      </OutboundLink>
      <OutboundLink href="https://vimeo.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "vimeo"]} />
      </OutboundLink>
    </div>
  </div>
);

export default IndexPage;
