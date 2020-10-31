import React, { useContext } from "react";
import imgTodo from "../img/farbeBild.jpg";
import imgTodoDark from "../img/darkBild.jpg";
import ThemeContext from "../context/ThemeContext";

const Header = ({ timeToGetBusy }) => {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;
  const hStyle = {
    textAlign: "center",
    margin: "10px",
    color: "gray",
  };
  return (
    <header>
      <h1 style={hStyle}>The Amazing To Do App</h1>
      {/* {isDark ? (
        <img
          className="header__img"
          alt="Mann checkt Liste"
          src={imgTodoDark}
        />
      ) : null} */}
      <img
        className="header__img"
        src={isDark ? imgTodoDark : imgTodo}
        alt="Mann checkt Liste"
      />

      {timeToGetBusy ? <h2 style={hStyle}>Time to get busy</h2> : null}

      <p style={{ marginBottom: "15px" }}>Add, Edit or Delete a Todo Item.</p>
    </header>
  );
};

export default Header;
