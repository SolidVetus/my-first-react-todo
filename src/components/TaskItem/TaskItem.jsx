/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TaskItem.module.css";
import classes from "./TaskItem.module.css";

export default function TaskItem(props) {
  const [content, setContent] = useState(props.completed);

  function toggleClick() {
    props.onToggle(props.id);
    setContent(!content);
  }
  return (
    <li>
      <div className={classes["task"]}>
        <span className={content ? `${classes["task--completed"]} ${classes["task-text"]}`: classes["task-text"]}>
          {props.title}
        </span>
        <div>
          <button onClick={() => toggleClick()}>
            {content ? "↩️" : "✅"}
          </button>
          <button
            onClick={() => props.onDelete(props.id)}
          >
            ❌
          </button>
        </div>
      </div>
    </li>
  );
}
