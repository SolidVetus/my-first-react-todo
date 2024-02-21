
import "./MyForm.module.css";
import classes from "./MyForm.module.css";
import useInput from "../../hooks/useInput";
import { useState } from "react";

export default function MyForm({update}) {
  let [isError, setError] = useState(false)
  let input = useInput()
  
    function onTaskAdd(event) {
        event.preventDefault()
        isError = !input.value.length ? true : false
        setError(isError)
        update(input.value)
        input.value = ('') //Как сделать чтоб работало?
    }

  return (
    <form className={classes.form}>
      <input className={classes.input}type="text" {...input} placeholder="Type here..."/>
      <button onClick={onTaskAdd} >add</button>
      {isError && <span className={classes.error}>Введите задачу</span>}
    </form>
  );
  
}


