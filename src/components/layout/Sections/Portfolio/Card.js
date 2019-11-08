import React, { Component } from "react";
import { CustomButton } from "../../Canvas/CustomButton";

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    margin: "1px",
    link: "#"
  };

  render() {
    this.cardStyle = {
      width: this.props.width,
      height: this.props.height,
      background: this.props.background,
      margin: this.props.margin
    };
    return (
      <div className="Card">
        <div>
          <div className="CardImage" style={this.cardStyle}></div>
          <div className="CardText"> {this.props.text} </div>
          <CustomButton
            width="150px"
            height="50px"
            link={this.props.link}
            text="Explore"
          />
        </div>
      </div>
    );
  }
}

export default Card;
