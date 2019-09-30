import React from "react";

function ShoppingItem(props) {
  console.log(`inside ShoppingItem`, props)
  /* props
    items : {apples}
    onDeleteItem : f
    onCheckItem : f
  */
  return (
    <li>
      <h2
        style={{
          textDecoration: props.item.checked ? "line-through" : null
        }}
      >
        {props.item.name}
      </h2>
      {/* pass entire item object to Check or Delete mehods */}
      <button type="button" onClick={() => props.onCheckItem(props.item)}>check</button>
      <button type="button" onClick={() => props.onDeleteItem(props.item)}>delete</button>
    </li>
  );
}

ShoppingItem.defaultProps = {
  item: {}
};

export default ShoppingItem;
