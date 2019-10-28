import React, { Component } from "react";

import XandrAboutImage from "./images/xandr_about.jpg";
import BinghamtonAboutImage from "./images/binghamton_about.jpg";
import CodeAboutImage from "./images/generic_code.png";

export class AboutImageSlide extends Component {
  render() {
    return (
      <div className="AboutImageRow">
        <img className="AboutImage" alt="Xandr Logo" src={XandrAboutImage} />
        <img
          className="AboutImage"
          alt="Binghamton University Logo"
          src={BinghamtonAboutImage}
        />
        <img className="AboutImage" alt="Generic Code" src={CodeAboutImage} />
        <p className="AboutImageCaption">
          I work as a <strong>Services Rotational Associate</strong> at{" "}
          <strong>Xandr</strong>. My Current title is{" "}
          <strong>Product Support Specialist</strong>
        </p>
        <p className="AboutImageCaption">
          I graduated from <strong>Binghamton University</strong> with a{" "}
          <i>BS</i> in <strong>Computer Engineering</strong>.
        </p>
        <p className="AboutImageCaption">
          I'm a very <strong>analytical</strong> person. I love working with{" "}
          <strong>numbers</strong> and <strong>code</strong>.
        </p>
      </div>
    );
  }
}

export default AboutImageSlide;
