
import { useState } from "react";
import "./TaskItem.module.css";
import classes from "./TaskItem.module.css";

export default function TaskItem(props) {
  const [isCompleted, setCompleted] = useState(props.completed);

  function toggleClick() {
    props.onToggle(props.id);
    setCompleted(!isCompleted);
  }
  return (
    <li>
      <div className={classes.task}>
        <span className={isCompleted ? `${classes["task--completed"]} ${classes["task-text"]}`: classes["task-text"]}>
          {props.title}
        </span>
        <div>
          <button onClick={toggleClick}>
            {isCompleted ? "↩️" : "✅"}
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
