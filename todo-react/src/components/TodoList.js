import React from "react";
//IMport Components
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
