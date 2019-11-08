import React, { Component } from "react";
import { Card } from "./Card.js";

export class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <h1>Portfolio [WIP]</h1>
        <div className="Gallery">
          <Card
            id="card-1"
            width="390px"
            height="300px"
            languages="Python and React.js"
            title="This Website"
            link="home"
          />
          <Card
            id="card-2"
            width="390px"
            height="300px"
            languages="Python"
            title="Slack Assistant"
          />
          <Card
            id="card-3"
            width="390px"
            height="300px"
            languages="Java/Android and Python"
            title="Recon Robot"
            link="https://www.binghamton.edu/news/story/1847/watson-seniors-design-reconnaissance-robot-for-police-work"
          />
        </div>
        <br />
      </div>
    );
  }
}

export default Portfolio;
