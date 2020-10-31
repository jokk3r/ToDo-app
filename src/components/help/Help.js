import React from "react";
import style from "./Help.module.scss";

function Help() {
  return (
    <div className={style.info}>
      <h2 className={style.info__header}>
        Here you can find information about ToDo App
      </h2>
      <ul className={style.info__list}>
        <li className={style.info__listItem}>
          You can add a task by writing in the "todo" field. Accept the task by
          clicking send.
        </li>
        <li className={style.info__listItem}>
          You can set priority dor you task. Select from the list on the right
          "Low", "Medium" or "High".
        </li>
        <li className={style.info__listItem}>
          You can delete your Task by clicking "Delete" on right side.
        </li>
        <li className={style.info__listItem}>
          You can click on the Task and change description.
        </li>
        <li className={style.info__listItem}>
          You can finish the task by checking on the left side
        </li>
      </ul>
    </div>
  );
}

export default Help;
