import React, { Component } from "react";
import { CustomButton } from "../../Canvas/CustomButton";

export class Card extends Component {
  static defaultProps = {
    margin: "1px",
    link: "#"
  };

  render() {
    this.cardStyle = {
      width: this.props.width,
      height: this.props.height,
      margin: this.props.margin
    };
    this.cardImageStyle = {};
    return (
      <div className="Card" style={this.cardStyle}>
        <div className="CardImage" id={this.props.id}></div>
        <div className="CardText">
          <span className="CardTextTitle">{this.props.title}</span>
          <br /> {this.props.languages}
        </div>

        <CustomButton
          width="150px"
          height="50px"
          link={this.props.link}
          text="Explore"
        />
      </div>
    );
  }
}

export default Card;
