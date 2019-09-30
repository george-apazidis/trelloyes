import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList(props) {
  console.log(`inside ShoppingList`, props)
  /* props
    items : [{apples},{oranges},{bread}]
    onDeleteItem : f
    onCheckItem : f
  */
  return (
    <ul>
      {props.items.map((item, i) => (
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
}

ShoppingList.defaultProps = {
  items: []
};

export default ShoppingList;
