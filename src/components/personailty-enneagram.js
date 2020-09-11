import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./personality-enneagram.css";

const PersonalityEnneagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          personality {
            enneagram {
              name
              number
              wing
            }
          }
        }
      }
    }
  `);

  const personality = data.allDataJson.nodes[0].personality;

  return personality !== null && personality.enneagram ? (
    <div className="enneagram">
      <h3>{personality.enneagram.name}</h3>
      <p>
        {personality.enneagram.number}
        {personality.enneagram.wing ? `w${personality.enneagram.wing}` : ""}
      </p>
    </div>
  ) : null;
};

export default PersonalityEnneagram;
