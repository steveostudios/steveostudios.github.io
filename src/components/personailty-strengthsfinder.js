import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./personality-strengthsfinder.css";

const PersonalityStrengthsFinder = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          personality {
            strengthsFinder {
              name
              strengths {
                name
                id
              }
            }
          }
        }
      }
    }
  `);

  const personality = data.allDataJson.nodes[0].personality;

  return personality !== null && personality.strengthsFinder ? (
    <div className="strengthsfinder">
      <h3>{personality.strengthsFinder.name}</h3>
      <ol>
        {personality.strengthsFinder.strengths.map((strength, i) => (
          <li key={i}>{strength.name}</li>
        ))}
      </ol>
    </div>
  ) : null;
};

export default PersonalityStrengthsFinder;
