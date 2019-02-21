import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDribbble,
  faMediumM,
  faVimeoV,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faIgloo,
  faStar,
  faGithub,
  faDribbble,
  faMediumM,
  faVimeoV,
  faTwitter
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis
      sapien. In hac habitasse platea dictumst. Etiam laoreet vitae erat eget
      elementum. Phasellus scelerisque porttitor elementum. Mauris euismod ante
      nec tellus auctor tristique ut vitae neque. Proin efficitur interdum elit
      eget dapibus. Nullam non laoreet libero. Aenean et tortor in massa
      ultricies consectetur. Proin cursus mi velit, et eleifend enim suscipit
      eget. Pellentesque sed mollis justo, quis condimentum ipsum. Fusce
      ultricies, felis non scelerisque finibus, dui nunc viverra arcu, eu
      hendrerit turpis turpis et risus. Sed molestie pellentesque felis ac
      scelerisque.{" "}
    </p>
    <p>
      Donec in augue sagittis, feugiat tellus tincidunt, placerat massa.
      Praesent eu mattis risus. Nulla facilisi. Curabitur at lorem et orci
      pretium hendrerit eu vitae tellus. Vivamus in tortor consectetur, posuere
      nisi id, semper nulla. Mauris tincidunt dui ut libero tristique gravida.
      Ut cursus gravida magna et interdum. Integer mattis massa ut libero
      hendrerit, feugiat pretium neque tempor. Vestibulum leo nulla, efficitur
      ac leo a, accumsan facilisis ligula. Quisque auctor interdum arcu, non
      scelerisque justo porta in.
    </p>
    <p>
      {" "}
      Aenean eleifend mauris dictum risus dignissim varius at at velit.
      Vestibulum in arcu magna. Nullam eu diam magna. Aliquam vitae tempus leo,
      nec scelerisque eros. Maecenas consectetur neque non urna mollis, vel
      elementum mauris varius. Aliquam eleifend finibus nulla sollicitudin
      pellentesque. Vivamus facilisis nec arcu eu blandit. Vestibulum dictum
      ipsum non purus porttitor pulvinar. In a lorem erat. Duis dapibus lacus
      nisi, consequat lacinia eros ultrices vitae. Integer facilisis nulla non
      lorem posuere ullamcorper. Curabitur ac orci neque. Aliquam faucibus
      dictum maximus. Cras et dolor sit amet neque dapibus ornare sed vitae
      velit.
    </p>
    <p>
      {" "}
      Aenean at ullamcorper odio, nec scelerisque erat. Suspendisse ut erat
      elementum, condimentum turpis id, tempor dolor. Phasellus molestie orci
      quis ipsum porta consequat. Cras sagittis pharetra sem, vel malesuada sem
      elementum sit amet. Vivamus cursus porta posuere.{" "}
    </p>
    <p>
      Aenean quis massa vel lectus maximus consequat sit amet vel nisi. Fusce
      luctus, mi ut maximus lobortis, mi massa venenatis turpis, quis tempor dui
      diam vitae dui. Praesent nec elit in sapien blandit porttitor at id justo.
    </p>
    <p>
      {" "}
      Suspendisse venenatis sapien ut orci consectetur pretium. Sed aliquam
      lorem odio, vel posuere sapien venenatis ut. Aenean ut turpis diam.{" "}
    </p>
    <p>
      Curabitur vestibulum enim nunc, sit amet faucibus mi euismod sed. Donec
      tincidunt lorem lectus, eu imperdiet enim euismod sed. Phasellus quis
      cursus nisi, eget faucibus enim. Proin eget ipsum ac nibh condimentum
      vulputate. In mattis eleifend tincidunt.{" "}
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
