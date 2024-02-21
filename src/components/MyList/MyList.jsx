
import "./MyList.module.css";
import classes from "./MyList.module.css";
import TaskItem from "../TaskItem/TaskItem"

export default function MyList({myTodos, deleteTask, toggleTask}) {

    return (
        <ul className={classes["todo-list"]}>
            {myTodos.map((todo) => (
              <TaskItem
                 onDelete={deleteTask}
                 onToggle={toggleTask}
                key={todo.id}
                {...todo}
              />
            ))}
          </ul>
    )
}