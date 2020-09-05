import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SocialList = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allSocialsYaml {
        nodes {
          id
          slug
          url
          image {
            publicURL
          }
        }
      }
    }
  `);
  console.log(data.allSocialsYaml.nodes);

  return (
    <ul className="social-list">
      {data.allSocialsYaml.nodes.map((social) => (
        <li key={social.slug}>
          <a href={social.url}>
            <img src={social.image.publicURL} alt={social.slug} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;

// <img src={social.publicURL} alt={social.slug} />
