import React from "react";

import TodoItem from "./TodoItem";

function TodoItemList({todos, onRemove, onToggle, moveCard}) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          index={index}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
}

export default TodoItemList;