import React from "react";
import Link from "gatsby-link";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.css";

const IndexPage = () => (
  <div className="home">
    <h1>Hi, I'm Steve Stone</h1>
    <p>
      I am a developer at
      <OutboundLink href="https://downloadyouthministry.com">
        {" "}
        Download Youth Ministry
      </OutboundLink>.
    </p>
    <p>I live in Louisville, KY.</p>
    <p>
      I make <OutboundLink href="https://sidekick.tv">Sidekick</OutboundLink>.
    </p>
    <div className="social">
      <OutboundLink href="https://twitter.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "twitter"]} size="xs" />
      </OutboundLink>
      <OutboundLink href="https://github.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "github"]} size="xs" />
      </OutboundLink>
      <OutboundLink href="https://dribbble.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "dribbble"]} size="xs" />
      </OutboundLink>
      <OutboundLink href="https://medium.com/@steveostudios">
        <FontAwesomeIcon icon={["fab", "medium"]} size="xs" />
      </OutboundLink>
      <OutboundLink href="https://vimeo.com/steveostudios">
        <FontAwesomeIcon icon={["fab", "vimeo"]} size="xs" />
      </OutboundLink>
    </div>
  </div>
);

export default IndexPage;
