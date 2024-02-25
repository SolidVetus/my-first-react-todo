import { useTodos } from "../../stores/useMyTodo.js";
import { useState } from "react";
import "./TaskItem.module.css";
import classes from "./TaskItem.module.css";

export default function TaskItem({id, completed, title}) {
  const { toggleTodo, deleteTodo } = useTodos();
  const [isCompleted, setCompleted] = useState(completed);

  function toggleClick() {
    toggleTodo(id);
    setCompleted(!isCompleted);
  }
  return (
    <li>
      <div className={classes.task}>
        <span
          className={
            isCompleted
              ? `${classes["task--completed"]} ${classes["task-text"]}`
              : classes["task-text"]
          }
        >
          {title}
        </span>
        <div>
          <button onClick={toggleClick}>{isCompleted ? "↩️" : "✅"}</button>
          <button onClick={() => deleteTodo(id)}>❌</button>
        </div>
      </div>
    </li>
  );
}
