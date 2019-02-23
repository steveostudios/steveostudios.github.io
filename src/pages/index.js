import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Steam from "../components/steam";
import coffeeMug from "../images/coffee-mug3.png";
import SEO from "../components/seo";

import "./home.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container home">
      <div className="main-contents">
        <Steam />
        <img
          style={{
            position: "relative",
            zIndex: 100,
            maxWidth: "400px"
          }}
          src={coffeeMug}
          alt="Logo"
        />
      </div>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
