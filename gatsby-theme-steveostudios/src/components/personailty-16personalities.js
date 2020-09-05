import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./personality-briggsmyers.css";

const Personality16Personalities = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          personality {
            briggsMyers {
              name
              traits {
                name
                value
              }
              role
              strategy
              type
            }
          }
        }
      }
    }
  `);

  const personality = data.allDataJson.nodes[0].personality;

  return personality !== null && personality.briggsMyers ? (
    <div className="briggsmyers">
      <h3>{personality.briggsMyers.name}</h3>
      <p>{personality.briggsMyers.type}</p>
    </div>
  ) : null;
};

export default Personality16Personalities;
