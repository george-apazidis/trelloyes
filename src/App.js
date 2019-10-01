import React, { Component } from "react";
import List from "./List";
import STORE from "./STORE";

const newRandomCard = () => {
  const id =
    Math.random()
      .toString(36)
      .substring(2, 4) +
    Math.random()
      .toString(36)
      .substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum"
  };
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends Component {
  state = {
    store: STORE
  };

  handleDeleteCard = cardId => {
    const { lists, allCards } = this.state.store;

    // for each list item
    const newLists = lists.map(list => ({
      // spread the entire list item
      ...list,
      // keep all cards that dont match the passed in prop cardID
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    });
  };

  handleAddCard = listId => {
    const newCard = newRandomCard();

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    });

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    });
  };

  render() {
    console.log(`App State`, this.state);

    // destructing
    const { lists, allCards } = this.state.store;

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
