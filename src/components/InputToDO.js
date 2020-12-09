import React, { useState, Component, useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const InputToDO = (props) => {
  const [title, setTitle] = useState("");
  const [correctLength, setCorrectLength] = useState(true);
  const [correctWithoutAt, setCorrectWithoutAt] = useState(false);

  const context = useContext(ThemeContext);

  useEffect(() => {
    console.log("Use Effect Func");
  }, []);
  const inputChange = (e) => {
    setTitle(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title.includes("@")) {
      setCorrectWithoutAt(true);
      return;
    } else if (correctWithoutAt === true) {
      setCorrectWithoutAt(false);
    }
    if (title.length > 3 && title.length < 25) {
      props.addToDo(title);
      setTitle("");
      setCorrectLength(true);
    } else {
      // incorrect length
      setCorrectLength(false);
    }
  };
  const isDark = context[0] === "dark" ? true : false;
  const button = (
    <input
      type="submit"
      value={isDark ? "add" : "+"}
      className="input-submit"
    />
  );
  return (
    <>
      <form
        action=""
        onSubmit={onSubmitHandler}
        className={isDark ? "form" : "form__dark"}
      >
        {isDark ? button : null}
        <input
          className={isDark ? "input__text" : "input__text__dark"}
          type="text"
          placeholder="add a task.."
          value={title}
          onChange={inputChange}
        />
        {/* <input
          type="submit"
          value={isDark ? "Mach hin" : "hinzufügen"}
          className="input-submit"
        /> */}
        {isDark ? null : button}
      </form>
      {correctLength ? null : (
        <p>Your ToDo must be between 3 and 25 characters long!</p>
      )}
      {correctWithoutAt ? <p>Please don’t use @ in your Todos!</p> : null}
    </>
  );
};

// class InputToDO extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       correctLength: true,
//     };
//   }
//   onSubmitHandler = (e) => {
//     e.preventDefault();

//     const { title } = this.state;
//     if (title.length > 3 && title.length < 25) {
//       this.props.addToDo(title);
//       this.setState({
//         title: "",
//         correctLength: true,
//       });
//     } else {
//       this.setState({ correctLength: false });
//     }
//   };
//   inputChange = (event) => {
//     event.target.value.length > 3 && event.target.value.length < 25
//       ? this.setState({
//           title: event.target.value,
//           correctLength: false,
//         })
//       : this.setState({
//           title: event.target.value,
//           correctLength: true,
//         });
//   };

//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.onSubmitHandler} className="form">
//           <input
//             // className="input-text"
//             className={`input-text ${
//               this.state.correctLength ? "error__red" : "correct"
//             }`}
//             type="text"
//             placeholder="Todo..."
//             value={this.state.title}
//             onChange={this.inputChange}
//           />
//           <input type="submit" className="input-submit" value="hinzufügen" />

//           {/* <p
//             className={` ${
//               this.state.correctLength ? "error__red" : "correct"
//             }`}
//           >
//             Dein Todo muss zwischen 3 und 25 Zeichen lang sein
//           </p> */}
//         </form>
//       </div>
//     );
//   }
// }

export default InputToDO;
