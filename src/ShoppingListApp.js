import React, { Component } from "react";
import AddItemForm from "./shopping-list/AddItemForm";
import ShoppingList from "./shopping-list/ShoppingList";

class ShoppingListApp extends Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false }
    ]
  };
  handleAddItem = itemName => {
    console.log("handle add item", { itemName });
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ];
    this.setState({ shoppingItems: newItems });
  };
  handleDeleteItem = item => {
    // grab shopping Items from state and remove the item that was clicked
    const newItems = this.state.shoppingItems.filter(itm => itm !== item);
    this.setState({
      shoppingItems: newItems
    });
  };
  handleCheckItem = item => {
    // grab shopping items from state and return new array
    const newItems = this.state.shoppingItems.map(itm => {
      // if the state item matches the clicked on item
      if (itm === item) {
        // toggle the checked property in state
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      shoppingItems: newItems
    });
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    );
  }
}

export default ShoppingListApp;
