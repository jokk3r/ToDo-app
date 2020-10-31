import React, { useContext } from "react";
import style from "./Footer.module.scss";
import ThemeContext from "../context/ThemeContext";
import imgTodo from "../img/3227392.jpg";
// import imgTodoDark from "../img/dark-todo.jpeg";

function Footer() {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;
  return (
    <>
      <div className={style.Footer__inner}>
        <img
          className={style.Footer__img}
          // src={isDark ? imgTodoDark : imgTodo}
          alt="Mann checkt Liste"
        />
        <p className={style.Footer__text}>Make Ur ToDo Liste</p>
        {/* <h3 className={style.Footer__header}>
          and don't forget to do something
        </h3> */}
      </div>
      {/* <div className={style.Footer}>
        <div className={style.Footer__orange}>
          <p className={style.Footer__orangeText}>created by Andrew</p>
          <p className={style.Footer__orangeText}>2020</p>
        </div>
      </div> */}
    </>
  );
}

export default Footer;
