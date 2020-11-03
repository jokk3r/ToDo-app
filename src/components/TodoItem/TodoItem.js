import React, { useEffect, useState, useContext } from "react";
import "./TodoItem.scss";
import Priority from "./Priority";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import deleteButtonWhite from "../../img/xWhite.png";
import deleteButtonDark from "../../img/xDark.png";
const darkButtonStyle = {
  backgroundColor: "#141321",
  border: "none",
  cursor: "pointer",

  // paddingRight: "10px",
};
const whiteButtonStyle = {
  backgroundColor: "#ffffff",
  border: "none",
  // color: "#141321",
  // paddingRight: "10px",
  cursor: "pointer",
};
const white = {
  color: "#141321",
};
const darkToUpperCase = {
  textTransform: "uppercase",
};

const TodoItem = (props) => {
  const context = useContext(ThemeContext);
  const [priority, setPriority] = useState("");

  // static contextType = ThemeContext;
  useEffect(() => {});

  let style = null;
  if (priority === "low") {
    style = { opacity: 0.3 };
  } else if (priority === "high") {
    style = { fontWeight: 800, fontSize: "25px" };
  }

  const onChangePriority = (event) => {
    setPriority(event.target.value);
  };
  const isDark = context[0] === "dark" ? true : false;
  return (
    <li className="todo__item">
      <div>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => props.handleChange(props.id)}
        ></input>
        {priority === "high" ? (
          <span
            style={{
              fontWeight: 800,
              color: "red",
              fontSize: "23px",
              paddingRight: "10px",
            }}
          >
            !
          </span>
        ) : null}
        <span
          style={style}
          className={`todo__item-name ${
            props.completed ? "todo__item--completed" : null
          }`}
        >
          <Link
            to={`/todo/${props.id}`}
            style={isDark ? white : darkToUpperCase}
          >
            {props.title}
          </Link>
        </span>
      </div>
      <div className="todo__item-buttons">
        <div className="priority">
          <Priority onChangePriority={onChangePriority} priority={priority} />
        </div>
        <button
          onClick={() => props.deleteToDoHandler(props.id)}
          style={isDark ? whiteButtonStyle : darkButtonStyle}
        >
          {/* {isDark ? "Destroy!" : "Delete"} */}
          {/* &#88; */}
          <img src={isDark ? deleteButtonWhite : deleteButtonDark} alt="" />
        </button>
      </div>
      {/* <span>{context}</span> */}
    </li>
  );
};

export default TodoItem;
