import React, { Component } from "react";
import List from "./List";
import STORE from "./STORE";

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = item => {
    console.log(item);

    // remove from store.lists.cardIds
    // const newCardIds = this.state.store.lists.
    // .map()
    //   cardIds.filter(id => id !== item);
    // this.setState({
    //   store: newItems
    // });

    // remove from store.allCards


    // const newItems = this.state.store.lists.cardIds.filter(id => id !== item.id);
    // this.setState({
    //   store: newItems
    // });
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
