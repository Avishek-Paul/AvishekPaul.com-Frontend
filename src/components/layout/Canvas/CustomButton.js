import React, { Component } from "react";
import { Link } from "react-scroll";

export class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.buttonStyle = {
      width: this.props.width,
      height: this.props.height
    };
  }

  render() {
    return (
      // <a href={this.props.link}>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <div className="CustomButton" style={this.buttonStyle}>
          <p>{this.props.text}</p>
        </div>
      </Link>
    );
  }
}

export default CustomButton;
