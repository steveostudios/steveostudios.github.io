import React from "react";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import family from "../../images/family.jpg";
import SEO from "../../components/seo";

import "./style.css";

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container about">
      <div className="main-contents">
        <img src={family} alt="Stone Family" />
        <h2>About Me</h2>
        <p>
          Hi. I’m Steve Stone. Father of three boys, husband of the most
          incredible woman in the world, and Christ-follower. I'm passionate
          about coffee, design, youth ministry, and making things.
        </p>
        <p>
          I started out at{" "}
          <a href="https://www.centralonline.tv/">Central Christian Church</a>{" "}
          in Las Vegas doing video production while in attending UNLV's film
          school. Then God called me out to Louisville, Kentucky to work at{" "}
          <a href="https://www.southeastchristian.org/home">
            Southeast Christian Church
          </a>
          . My great friend Dave Harris and I started Digital Stache and created
          motion backgrounds and a few app-based games (Spin That Wheel,
          Scorekeep, Ready, Set Go). We also had a podcast for a few years
          called <a href="https://churchtechtalk.com">Church Tech Talk</a>, ran
          a site called Stuff I Can Use (formerly Vine Resources), and put on a
          free conference for church tech folks called Gurus.
        </p>
        <p>
          Now I work at{" "}
          <a href="https://www.downloadyouthministry.com/">
            Download Youth Ministry
          </a>{" "}
          making apps that help youth workers, like{" "}
          <a href="https://sidekick.tv">Sidekick</a>.
        </p>
      </div>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
