import React, { Component } from "react";
import List from "./List";

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    console.log(`App Props`, this.props);
    /*
    1. STORE object in STORE.js is imported into index.js
    2. index.js sends STORE object as a prop (storeProp) to the App component (this component)

        strucure of store object:
        this.props =  store {  
            lists: [{},{},{},{}]
            allCards: { {}, {}, {}, {} }
          }

    3. We then destruct the storeProp porperties so we can refer to them as:
           "{lists}" rather than "this.props.storeProp.lists"
            and
           "{allCards} rather than "this.props.storeProp.allCards"
    */

    // destructing
    const { lists } = this.props.store;
    const { allCards } = this.props.store;

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
