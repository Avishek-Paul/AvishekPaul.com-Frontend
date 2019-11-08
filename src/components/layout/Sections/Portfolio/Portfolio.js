import React, { Component } from "react";
import { Card } from "./Card.js";

export class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <h1>Portfolio [WIP]</h1>
        <div className="Gallery">
          <Card
            width="390px"
            height="300px"
            background="url(https://via.placeholder.com/450x300/28837E/FFFFFF?text=This%20Website)"
            text="Python and React.js"
          />
          <Card
            width="390px"
            height="300px"
            background="url(https://via.placeholder.com/450x300/FF8700/EEEEEE?text=Slack%20Bot)"
            text="Python"
          />
          <Card
            width="390px"
            height="300px"
            background="url(https://via.placeholder.com/450x300/005A43/EEEEEE?text=Recon%20Rover)"
            text="Java/Android and Python"
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
