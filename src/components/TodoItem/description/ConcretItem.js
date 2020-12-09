import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import style from "./ConcretItem.module.scss";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../../context/ThemeContext";
import TextareaAutosize from "react-autosize-textarea";
function ConcretItem(props) {
  console.log(props);
  const todoId = props.match.params.id;
  const [todoItem, setTodoItem] = useState("");
  const [description, setDescription] = useState("");
  const [thisCommit, setThisCommit] = useState("");
  const context = useContext(ThemeContext);
  const isDark = context[0] === "dark" ? true : false;
  console.log(description);
  useEffect(() => {
    axios.get(`http://localhost:4000/todos/${todoId}`).then((response) => {
      setTodoItem(response.data);
      setDescription(response.data.comment);
      console.log(response);
    });
    // getData();
  }, []);
  // const getData = async () => {
  //   const response = await fetch(`http://localhost:4000/todos/${todoId}`);
  //   const data = await response.json();
  //   setTodoItem(data);
  //   setDescription(data.comment);
  // };
  // const addDescription = (desc) => {
  //   let description = desc;
  //   axios
  //     .post("http://localhost:4000/todos/todo/", { description })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const updateItem = {
      title: todoItem.title,
      completed: todoItem.completed,
      comment: description,
    };
    axios
      .put(`http://localhost:4000/todos/${todoId}`, { ...updateItem })
      .then((response) => {
        // axios.get(`http://localhost:4000/todos/`).then((response) => {
        //   let data = response.data;
        //   console.log(data);
        // });
      });
  };
  const onHandleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div
      className={
        isDark ? style.description__main : style.description__main__dark
      }
    >
      <div
        className={
          isDark ? style.description__block : style.description__block__dark
        }
      >
        <p
          className={
            isDark ? style.description__title : style.description__title__dark
          }
        >
          {todoItem.title}
        </p>

        <form action="" onSubmit={onSubmitForm}>
          <label>
            <TextareaAutosize
              className={
                isDark
                  ? style.description__textarea
                  : style.description__textarea__dark
              }
              onChange={onHandleChangeDescription}
              value={description}
              placeholder="Add a description..."
            >
              {todoItem.description}
            </TextareaAutosize>
          </label>
          <div className={style.description__buttons}>
            <button className={style.description__button__done} type="submit">
              Done
            </button>
            <NavLink to="/">
              <button
                className={
                  isDark
                    ? style.description__button__cancel
                    : style.description__button__cancel__dark
                }
                type="submit"
              >
                Cancel
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConcretItem;
