import "./MyList.module.css";
import classes from "./MyList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

export default function MyList() {
  const myTodos = useSelector((state) => state.todos);

  return (
    <ul className={classes["todo-list"]}>
      {myTodos.map((todo) => (
        <TaskItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
