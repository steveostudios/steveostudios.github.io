import React from "react";
import Img from "gatsby-image";

import { graphql, useStaticQuery } from "gatsby";

// import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import PersonalityEnneagram from "./../components/personailty-enneagram";
import Personality16Personalities from "./../components/personailty-16personalities";
import PersonalityStrengthsFinder from "./../components/personailty-strengthsfinder";
import WorkHistory from "./../components/work-history";
import About from "./../components/about";
import EducationHistory from "./../components/education-history";
import "./home.css";

const HomeTemplate = () => {
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
    <Layout>
      <div className="top">
        <div className="sidebar">
          <div className="avatar">
            <div className="swatch" />
            <Img
              className="headshot"
              fixed={data.file.childImageSharp.fixed}
              alt="headshot"
            />
          </div>
          <h2>Developer. Designer. Youth Worker. Nerd.</h2>
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
        </div>
        <div>
          <About />
        </div>
      </div>
      <div className="history">
        <WorkHistory />
        <EducationHistory />
      </div>
      <div className="personality">
        <PersonalityEnneagram />
        <Personality16Personalities />
        <PersonalityStrengthsFinder />
      </div>
    </Layout>
  );
};

export default HomeTemplate;
