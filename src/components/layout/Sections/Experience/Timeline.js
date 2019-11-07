import React, { Component } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff7062", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff7062" }}
          date="July 2019 - Present"
          iconStyle={{ background: "#ff7062", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Services Rotational Associate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Xandr: New York, NY
          </h4>
          <p>
            <strong>Product Support Specialist</strong>: As a member of the
            Investr-Pros team, I proactively monitored high budget video
            advertising campaigns and resolved issues early in order to ensure
            maximum spend on the Xandr Platform. <br />
            <strong>Rotation #2</strong>: TBD <br />
            <strong>Rotation #3</strong>: TBD <br />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2018 - August 2018"
          contentStyle={{ background: "#ff8700", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff8700" }}
          iconStyle={{ background: "#ff8700", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Capability Specialists Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            AppNexus: New York, NY
          </h4>
          <p>
            - Created a Slack Bot that would learn to answer frequently asked
            questions in various capability channels. <br />- Answer similar
            questions if it has an answer stored. <br />- Logs questions it
            doesn't know and waits for a human to answer it (then logs the
            answer as well).
            <br /> - Built in Python. Uses Redis as a message queue.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#005A43", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #005A43" }}
          date="Fall 2015 - Spring 2019"
          iconStyle={{ background: "#005A43", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Binghamton University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Computer Engineering
          </h4>
          <p>
            <strong>Notable Courses</strong>: Data Structures and Algorithms,
            Operating Systems, Computer Network Security, Computer Networking
            and Communications, Digital Systems Design, Signals and Systems
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

export default Timeline;
