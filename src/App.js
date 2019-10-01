import React, { Component } from "react";
import List from "./List";
import STORE from "./STORE";

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
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
