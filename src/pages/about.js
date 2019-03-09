import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import family from "../images/family.jpg";
import SEO from "../components/seo";

import "./home.css";

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container about">
      <div className="main-contents">
        <img src={family} alt="Stone Family" />
        <p>
          Hi. I’m Steve Stone. Father of three boys, husband of the most
          incredible woman in the world, and Christ-Follower. I'm passionate
          about coffee, design, youth ministry, and making things.
        </p>

        <p>
          I started out at Central Christian Church in Las Vegas doing video
          production while in attending UNLV's film school. Then God called me
          out to Louisville, Kentucky to work at Southeast Christian Church. My
          great friend Dave Harris and I started Digital Stache and created
          motion backgrounds and a few app-based games (Spin That Wheel,
          Scorekeep, Ready, Set Go). We also had a podcast for a few years
          called Church Tech Talk, ran a site called Stuff I Can Use (formerly
          Vine Resources), and put on a free conference for church tech folks
          called Gurus.
        </p>
        <p>
          Now I work at Download Youth Ministry making apps that help youth
          workers, like Sidekick.
        </p>
      </div>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
