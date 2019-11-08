import React, { Component } from "react";
import { Link } from "react-scroll";

export class CustomButton extends Component {
  static defaultProps = {
    link: "about"
  };

  render() {
    this.buttonStyle = {
      width: this.props.width,
      height: this.props.height
    };

    if (this.props.link.includes("http")) {
      //Return a custom button without the Link component
      return (
        <a href={this.props.link}>
          <div className="CustomButton" style={this.buttonStyle}>
            <p>{this.props.text}</p>
          </div>
        </a>
      );
    }

    return (
      <Link
        activeClass="active"
        to={this.props.link}
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
