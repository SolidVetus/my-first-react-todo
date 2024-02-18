// import { useCallback } from 'react'
import "./IndexMy.css";
import { dataTodos } from "./MyData.js";
import TaskItem from "./components/TaskItem";
import MyForm from "./components/MyForm.jsx";
import { useState } from "react";
import Header from "./components/Header.jsx";
import DeleteAllButton from "./components/DeleteAllBtn.jsx";

function App() {
  let [myTodos, setMyTodos] = useState(dataTodos);
  let [currentId, setCurrentId] = useState(myTodos[myTodos.length - 1]?.id);

  function InputUpdate(value) {
    // console.log("Outer: ", value);
    myTodos.push({
      title: value,
      id: ++currentId,
      completed: false,
    });
    setMyTodos(myTodos);
    setCurrentId(currentId);

    // console.log(myTodos);
  }

  function deleteTask(id) {
    myTodos = myTodos.filter((task) => {
      return task.id !== id;
    });
    setMyTodos(myTodos);
  }

  function toggleTask(id) {
    const currentIndex = myTodos.findIndex((task) => task.id === id);
    myTodos[currentIndex].completed = !myTodos[currentIndex].completed;

    setMyTodos(myTodos);
    // console.log(myTodos)
  }

  return (
    <>
      <Header />
      <div className="container">
        <MyForm
          update={(value) => {
            if (!value) {
              return;
            }
            InputUpdate(value);
          }}
        />
        <section className="todos-section">
          <DeleteAllButton />
          <ul className="todo-list">
            {myTodos.map((todo) => (
              <TaskItem
                onDelete={(id) => deleteTask(id)}
                onToggle={(id) => toggleTask(id)}
                key={todo.id}
                {...todo}
              />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
