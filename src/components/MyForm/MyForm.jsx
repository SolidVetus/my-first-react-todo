import "./MyForm.module.css";
import classes from "./MyForm.module.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../stores/store";

export default function MyForm() {
  const dispatch = useDispatch();
  const input = useRef(null);
  let [isError, setError] = useState(false);

  function onTaskAdd(event) {
    event.preventDefault();
    if (!input.current.value.length) {
      return setError(true);
    }
    setError(false);
    dispatch(addTodo(input.current.value));
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
