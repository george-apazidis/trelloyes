import React, { Component } from "react";

class Card extends Component {
  render() {
    console.log(`Card Props for card`, this.props);
    /* PROPS
      {
        id : "a",
        title: "First card",
        content: "lorem"
        onDeleteCard : f
      }
    */

    // destructing
    const { title, content, id, onDeleteCard } = this.props;
    
    return (
      <div className="Card">
        <button type="button" onClick={() => onDeleteCard(id)}>
          delete
        </button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Card;
