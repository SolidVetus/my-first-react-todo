import { useTodos } from "./stores/useMyTodo";
import TaskItem from "./components/TaskItem/TaskItem";

function AppZ() {
//   const myTodos = useTodos((state) => state.myTodos);

const { myTodos, addTodo } = useTodos();
console.log(myTodos);

//   useTodos((state) => state.addTodo("poopa"));

  return (
    <>
       {myTodos.map((todo) => (
              <TaskItem
                //  onDelete={deleteTask}
                //  onToggle={toggleTask}
                key={todo.id}
                {...todo}
              />
            ))}
      <button onClick={() => addTodo("cooqa")}></button>
    </>
  );
}

export default AppZ;
