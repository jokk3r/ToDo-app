import React, { useContext } from "react";
import style from "./Help.module.scss";
import ThemeContext from "../../context/ThemeContext";
function Help() {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;
  return (
    <div className={isDark ? style.info__main : style.info__main__dark}>
      <div className={isDark ? style.info : style.info__dark}>
        <h2 className={isDark ? style.info__header : style.info__header__dark}>
          Info
        </h2>
        <ul className={style.info__list}>
          <li className={style.info__listItem}>
            <p className={isDark ? style.info__count : style.info__count__dark}>
              1
            </p>
            <p className={isDark ? style.info__p : style.info__p__dark}>
              You can add a task by writing in the "todo" field. Accept the task
              by clicking send.
            </p>
          </li>
          <li className={style.info__listItem}>
            <p className={isDark ? style.info__count : style.info__count__dark}>
              2
            </p>
            <p className={isDark ? style.info__p : style.info__p__dark}>
              You can set priority dor you task. Select from the list on the
              right "Low", "Normal" or "High".
            </p>
          </li>
          <li className={style.info__listItem}>
            <p className={isDark ? style.info__count : style.info__count__dark}>
              3
            </p>
            <p className={isDark ? style.info__p : style.info__p__dark}>
              You can delete your Task by clicking "Delete" on right side.
            </p>
          </li>
          <li className={style.info__listItem}>
            <p className={isDark ? style.info__count : style.info__count__dark}>
              4
            </p>
            <p className={isDark ? style.info__p : style.info__p__dark}>
              {" "}
              You can click on the Task and change description.
            </p>
          </li>
          <li className={style.info__listItem}>
            <p className={isDark ? style.info__count : style.info__count__dark}>
              5
            </p>
            <p className={isDark ? style.info__p : style.info__p__dark}>
              {" "}
              You can finish the task by checking on the left side
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
