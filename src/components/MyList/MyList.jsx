import "./MyList.module.css";
import classes from "./MyList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import { useTodos } from "../../stores/useMyTodo.js";

export default function MyList() {
  const { myTodos } = useTodos();

  return (
    <ul className={classes["todo-list"]}>
      {myTodos.map((todo) => (
        <TaskItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
}
