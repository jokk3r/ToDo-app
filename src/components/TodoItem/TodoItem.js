import React from "react";
import "./TodoItem.scss";
const TodoItem = (props) => {
  return (
    <li className="todo__item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      ></input>

      <span className={props.completed ? "completed-item" : null}>
        {props.title}
      </span>
      <button onClick={() => props.deleteToDoHandler(props.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
