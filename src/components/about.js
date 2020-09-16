import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./about.css";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          about
        }
      }
    }
  `);

  const about = data.allDataJson.nodes[0].about;

  return about !== null ? (
    <div className="about">
      <h3>About Me</h3>
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </div>
  ) : null;
};

export default About;
