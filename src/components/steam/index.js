import React from "react";
import steamImage1 from "../../images/smoke_1.png";
import steamImage2 from "../../images/smoke_2.png";
import steamImage3 from "../../images/smoke_3.png";
import "./style.css";

const steamImage1Link = `<g>
  <image class="steamImage1" xlink:href=${steamImage1} x="30" y="150" height="100" width="100"/>
  <image class="steamImage2" xlink:href=${steamImage2} x="50" y="150" height="100" width="100"/>
  <image class="steamImage3" xlink:href=${steamImage3} x="70" y="150" height="80" width="80"/>
  <image class="steamImage4" xlink:href=${steamImage1} x="70" y="150" height="100" width="100"/>
  <image class="steamImage5" xlink:href=${steamImage2} x="60" y="150" height="90" width="90"/>
  <image class="steamImage6" xlink:href=${steamImage3} x="40" y="150" height="100" width="100"/>
  <image class="steamImage7" xlink:href=${steamImage1} x="50" y="150" height="60" width="60"/>
  <image class="steamImage8" xlink:href=${steamImage2} x="70" y="150" height="70" width="70"/>
  <image class="steamImage9" xlink:href=${steamImage3} x="30" y="150" height="100" width="100"/>
</g>`;

const Steam = () => (
  <div className="steam">
    <svg
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: steamImage1Link }}
    />
  </div>
);
export default Steam;
