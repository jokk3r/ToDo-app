import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import Header from "./Header";
import InputToDo from "./InputToDO";
import { v4 as uuidv4 } from "uuid";
// class component
class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: "React lernen",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "JavaScript auffrischen (Klassen, usw.)",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Props verstehen",
          completed: false,
        },
      ],
    };
  }
  addToDo = (title) => {
    let newArray = [...this.state.todos];
    console.log(newArray);

    newArray.push({
      id: uuidv4(),
      title: title,
      completed: false,
    });
    this.setState({
      todos: newArray,
    });
  };
  onChangeCheckbox = (id) => {
    const updateTodosArr = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updateTodosArr,
    });
  };
  deleteToDoHandler = (id) => {
    console.log("delete item", id);
    const updateTodos = this.state.todos.filter((item) => item.id !== id);

    this.setState({
      todos: updateTodos,
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <InputToDo addToDo={this.addToDo} />
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              handleChange={this.onChangeCheckbox}
              deleteToDoHandler={this.deleteToDoHandler}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// functional component
const TodoContainerFunction = (props) => {
  return (
    <div>
      <h1>Hi, ich bin der TodoContainer!</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default TodoContainer;
