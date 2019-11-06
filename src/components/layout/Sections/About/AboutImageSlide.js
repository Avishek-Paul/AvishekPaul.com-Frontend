import React, { Component, Fragment } from "react";

import XandrAboutImage from "./images/xandr_about.jpg";
import BinghamtonAboutImage from "./images/binghamton_about.jpg";
import CodeAboutImage from "./images/generic_code.png";

export class AboutImageSlide extends Component {
  render() {
    return (
      <Fragment>
        <div className="AboutImageRow GreaterThan775">
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

        <div className="AboutImageRow LessThan775">
          <img className="AboutImage" alt="Xandr Logo" src={XandrAboutImage} />{" "}
          <p className="AboutImageCaption">
            I work as a <strong>Services Rotational Associate</strong> at{" "}
            <strong>Xandr</strong>. My Current title is{" "}
            <strong>Product Support Specialist</strong>
          </p>
          <img
            className="AboutImage"
            alt="Binghamton University Logo"
            src={BinghamtonAboutImage}
          />
          <p className="AboutImageCaption">
            I graduated from <strong>Binghamton University</strong> with a{" "}
            <i>BS</i> in <strong>Computer Engineering</strong>.
          </p>
          <img className="AboutImage" alt="Generic Code" src={CodeAboutImage} />
          <p className="AboutImageCaption">
            I'm a very <strong>analytical</strong> person. I love working with{" "}
            <strong>numbers</strong> and <strong>code</strong>.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default AboutImageSlide;
