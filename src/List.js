import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  render() {
    console.log(`List props `, this.props);
    /* PROPS
      id : 1
      header : "First list",
      cards : [
        {
          id:a,
          title:"first car",
          content:"lorm"
        },
        {
          id:b,
          title:"second car",
          content:"lorm"
        },
      ]
      onDeleteCard : f

    */

    // destructing
    const { header, cards, onDeleteCard } = this.props;
    console.log(cards);
    return (
      <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              content={card.content}
              onDeleteCard={onDeleteCard}
            />
          ))}

          <button type="button" className="List-add-button">
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}

export default List;
