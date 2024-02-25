import "./MyForm.module.css";
import classes from "./MyForm.module.css";
import { useRef, useState } from "react";
import { useTodos } from "../../stores/useMyTodo.js";

export default function MyForm() {
  const { addTodo } = useTodos();
  const input = useRef(null);

  let [isError, setError] = useState(false);

  function onTaskAdd(event) {
    event.preventDefault();
    if (!input.current.value.length) {
      return setError(true);
    }
    setError(false);
    addTodo(input.current.value);
    input.current.value = "";
  }

  return (
    <form className={classes.form}>
      <input
        className={classes.input}
        type="text"
        {...input}
        placeholder="Type here..."
        ref={input}
      />
      <button onClick={onTaskAdd}>add</button>
      {isError && <span className={classes.error}>Введите задачу</span>}
    </form>
  );
}
