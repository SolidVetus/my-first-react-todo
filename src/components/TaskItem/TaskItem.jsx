import { useState } from "react";
import "./TaskItem.module.css";
import classes from "./TaskItem.module.css";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../stores/store";

export default function TaskItem({ id, completed, title }) {
  const [isCompleted, setCompleted] = useState(completed);
  const dispatch = useDispatch();

  function toggleClick() {
    dispatch(toggleTodo(id));
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
          <button onClick={() => dispatch(deleteTodo(id))}>❌</button>
        </div>
      </div>
    </li>
  );
}
