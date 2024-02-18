/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TaskItem.module.css";
import classes from "./TaskItem.module.css";

export default function TaskItem(props) {
  const [content, setContent] = useState(props.completed)
  
  function toggleClick() {
    props.onToggle(props.id)
    setContent(!content)
  }
  return (
    <li>
      <div className="task">
        <span className={content ? classes["completed-task"] : null}>
          {props.title}
        </span>
        <button className="done-btn" onClick={() => toggleClick()}>
          {content ? "↩️" : "✅"}
        </button>
        <button className="delete-btn" onClick={() => props.onDelete(props.id)}>
          ❌
        </button>
      </div>
    </li>
  );
}
