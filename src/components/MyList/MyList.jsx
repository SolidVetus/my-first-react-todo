/* eslint-disable react/prop-types */
import "./MyList.module.css";
import classes from "./MyList.module.css";
import TaskItem from "../TaskItem/TaskItem"

export default function MyList({myTodos, deleteTask, toggleTask}) {

    return (
        <ul className={classes["todo-list"]}>
            {myTodos.map((todo) => (
              <TaskItem
                 onDelete={(id) => deleteTask(id)}
                 onToggle={(id) => toggleTask(id)}
                key={todo.id}
                {...todo}
              />
            ))}
          </ul>
    )
}