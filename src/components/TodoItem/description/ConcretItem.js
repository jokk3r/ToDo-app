import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./ConcretItem.module.scss";

function ConcretItem(props) {
  console.log(props);
  const todoId = props.match.params.id;
  const [todoItem, setTodoItem] = useState("");
  const [description, setDescription] = useState("");
  const [thisCommit, setThisCommit] = useState("");
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
    <div className={style.description__block}>
      <h1>You chose this task: {<b>{todoItem.title}</b>}</h1>

      {/* {description === "" ?
       */}
      <form action="" onSubmit={onSubmitForm}>
        <label>
          <span>Beschreibung:</span>
          <textarea
            className={style.description__textarea}
            name="description"
            maxLength="500"
            cols="50"
            rows="10"
            onChange={onHandleChangeDescription}
            value={description}
          >
            {todoItem.description}
          </textarea>
        </label>
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}

export default ConcretItem;
