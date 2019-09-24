import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  render() {
    console.log(`List props `, this.props);

    // destructing
    const { header } = this.props;
    const { cards } = this.props;

    return (
      <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
          {cards.map(card => (
            <Card key={card.id} title={card.title} content={card.content} />
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
