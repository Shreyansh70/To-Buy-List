import React from "react";

export default function Item(props) {
    
  const { prefix, allList } = props;
  let newList = [];

  if (prefix.length === 0) {
    newList = allList;
  } 
  else {
    newList = allList.map(function check(items) {
      if (items.startsWith(prefix)) return items;
    });
  }

  return (
    <div className="container">
      {newList.map((user) => (
        <div className="items">{user}</div>
      ))}
    </div>
  );
}
