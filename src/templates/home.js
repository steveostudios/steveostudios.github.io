import React from "react";
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
  return (
    <Layout>
      <div>
        <About />
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
