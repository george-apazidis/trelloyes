import React, { Component } from "react";

class Card extends Component {
  render() {
    console.log(`Card Props for card`, this.props);

    // destructing
    const { title } = this.props;
    const { content } = this.props;

    return (
      <div className="Card">
        <button type="button">delete</button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Card;
