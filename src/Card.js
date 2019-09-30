import React, { Component } from "react";

class Card extends Component {
  render() {
    console.log(`Card Props for card`, this.props);
    /* PROPS
      card: 
        {
        title: "First card",
        content: "lorem ipsum"
        }
      onDeleteCard : f
    */

    // destructing
    const { card, onDeleteCard } = this.props;
    const { title, content } = this.props.card;
    
    return (
      <div className="Card">
        <button type="button" onClick={() => onDeleteCard(card)}>
          delete
        </button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Card;
