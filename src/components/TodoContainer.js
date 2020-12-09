import React, { useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem/TodoItem";
import InputToDo from "./InputToDO";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import style from "./TodoContainer.scss";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header";

// class TodoContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       todoListInput: "",
//       timeToGetBusy: false,
//       isLoading: false,
//     };
//   }

//   componentDidMount() {
//     axios
//       //   .get("https://jsonplaceholder.typicode.com/todos", {
//       //   params: {
//       //     _limit: 15,
//       //   },
//       // });

//       .get("http://localhost:4000/todos/")
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           todos: response.data,
//         });
//       });
//   }
//   componentDidUpdate() {
//     console.log("Komponente ist fertig(componentDidUpdate)");
//     if (this.state.todos.length >= 7 && this.state.timeToGetBusy === false) {
//       this.setState({
//         timeToGetBusy: true,
//       });
//     } else if (
//       this.state.todos.length < 7 &&
//       this.state.timeToGetBusy === true
//     ) {
//       this.setState({
//         timeToGetBusy: false,
//       });
//     }
//   }
//   addToDo = (todo) => {
//     // let newArray = [...this.state.todos];
//     // console.log(newArray);

//     // newArray.push({
//     //   id: uuidv4(),
//     //   title: title,
//     //   completed: false,
//     // });
//     // this.setState({
//     //   todos: newArray,
//     // });
//     this.setState({
//       isLoading: true,
//     });
//     let title = todo;
//     axios
//       .post("http://localhost:4000/todos/", { title })
//       .then((res) => {
//         console.log(res.data);
//         this.setState({
//           todos: [...this.state.todos, res.data],
//           isLoading: false,
//           comment: "",
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   onChangeCheckbox = (id) => {
//     axios.put(`http://localhost:4000/todos/${id}`).then(() => {
//       const updateTodosArr = this.state.todos.map((todo) => {
//         console.log("change", todo);
//         if (todo._id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       this.setState({
//         todos: updateTodosArr,
//       });
//     });
//   };
//   deleteToDoHandler = (id) => {
//     console.log("delete item", id);
//     axios.delete(`http://localhost:4000/todos/${id}`).then(() => {
//       const updateTodos = this.state.todos.filter((item) => item._id !== id);
//       this.setState({
//         todos: updateTodos,
//       });
//     });
//   };
//   render() {
//     const isDark = ThemeContext[0] === "dark" ? true : false;
//     console.log(ThemeContext);
//     const { todos } = this.state;
//     const actionTodos = todos.filter((todo) => !todo.completed);
//     const doneTodos = todos.filter((todo) => todo.completed);

//     console.log("Render Kommentare wird aufgerufen");
//     return (
//       <>
//         <div
//           className={isDark ? "container__dark" : "container"}
//           style={this.state.isLoading ? { opacity: 0.3 } : null}
//         >
//           {/* <Header timeToGetBusy={this.state.timeToGetBusy} /> */}
//           <div className="todo__count-div">
//             <div className="todo__count">
//               <span className="todo__count__span">{todos.length}</span>
//               <p>Total</p>
//             </div>
//             <div className="todo__count">
//               <span className="todo__count__span">{actionTodos.length}</span>
//               <p>To Do</p>
//             </div>
//             <div className="todo__count">
//               <span className="todo__count__span">{doneTodos.length}</span>
//               <p>Done</p>
//             </div>
//           </div>
//           <InputToDo addToDo={this.addToDo} />
//           {this.state.isLoading ? (
//             <p style={{ marginTop: "25px" }}>Loading...</p>
//           ) : null}
//           <ul>
//             {/* {this.state.todos.map((todo) => (
//               <TodoItem
//                 key={todo._id}
//                 id={todo._id}
//                 title={todo.title}
//                 completed={todo.completed}
//                 handleChange={this.onChangeCheckbox}
//                 deleteToDoHandler={this.deleteToDoHandler}
//               />
//             ))} */}
//             {[...actionTodos, ...doneTodos].map((todo) => (
//               <TodoItem
//                 key={todo._id}
//                 id={todo._id}
//                 title={todo.title}
//                 completed={todo.completed}
//                 handleChange={this.onChangeCheckbox}
//                 deleteToDoHandler={this.deleteToDoHandler}
//               />
//             ))}
//           </ul>
//         </div>
//         {/* <Footer /> */}
//       </>
//     );
//   }
// }

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);
  const [todoListInput, setTodoListInput] = useState("");
  const [timeToGetBusy, setTimeToGetBusy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const context = useContext(ThemeContext);
  useEffect(() => {
    if (todos.length >= 7 && timeToGetBusy === false) {
      setTimeToGetBusy(true);
    } else if (todos.length < 7 && timeToGetBusy === true) {
      setTimeToGetBusy(false);
    }

    axios
      //   .get("https://jsonplaceholder.typicode.com/todos", {
      //   params: {
      //     _limit: 15,
      //   },
      // });

      .get("http://localhost:4000/todos/")
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      });
  }, [todos.length]);

  const addToDo = (todo) => {
    setIsLoading(true);
    let title = todo;
    axios
      .post("http://localhost:4000/todos/", { title })
      .then((res) => {
        console.log(res.data);
        console.log(todos);
        setTodos([...todos, res.data]);
        setIsLoading(false);
        setComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeCheckbox = (id) => {
    axios.put(`http://localhost:4000/todos/${id}`).then(() => {
      const updateTodosArr = todos.map((todo) => {
        console.log("change", todo);
        if (todo._id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos(updateTodosArr);
    });
  };
  const deleteToDoHandler = (id) => {
    console.log("delete item", id);
    axios.delete(`http://localhost:4000/todos/${id}`).then(() => {
      const updateTodos = todos.filter((item) => item._id !== id);
      setTodos(updateTodos);
    });
  };

  const isDark = context[0] === "dark" ? true : false;

  // const { todos } = this.state;
  const actionTodos = todos.filter((todo) => !todo.completed);
  const doneTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      <div className={isDark ? "container__main" : "container__main__dark"}>
        <div
          className={isDark ? "container" : "container__dark"}
          style={isLoading ? { opacity: 0.3 } : null}
        >
          <div className="todo__count-div">
            <div className={isDark ? "todo__count" : "todo__count__dark"}>
              <span className="todo__count__span">{todos.length}</span>
              <p>Total</p>
            </div>
            <div className={isDark ? "todo__count" : "todo__count__dark"}>
              <span className="todo__count__span">{actionTodos.length}</span>
              <p>To Do</p>
            </div>
            <div className={isDark ? "todo__count" : "todo__count__dark"}>
              <span className="todo__count__span">{doneTodos.length}</span>
              <p>Done</p>
            </div>
          </div>
          <Header timeToGetBusy={timeToGetBusy} />
          <InputToDo addToDo={addToDo} />
          {isLoading ? <p style={{ marginTop: "25px" }}>Loading...</p> : null}
          <ul>
            {/* {this.state.todos.map((todo) => (
              <TodoItem
                key={todo._id}
                id={todo._id}
                title={todo.title}
                completed={todo.completed}
                handleChange={this.onChangeCheckbox}
                deleteToDoHandler={this.deleteToDoHandler}
              />
            ))} */}
            {[...actionTodos, ...doneTodos].map((todo) => (
              <TodoItem
                key={todo._id}
                id={todo._id}
                title={todo.title}
                completed={todo.completed}
                handleChange={onChangeCheckbox}
                deleteToDoHandler={deleteToDoHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
