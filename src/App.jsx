import "./IndexMy.css";
import { dataTodos } from "./MyData.js";
import MyForm from "./components/MyForm/MyForm.jsx";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import DeleteAllButton from "./components/DeleteAllBtn/DeleteAllBtn.jsx";
import MyList from "./components/MyList/MyList.jsx";

function App() {
  let [myTodos, setMyTodos] = useState(dataTodos);
  let [currentId, setCurrentId] = useState(myTodos[myTodos.length - 1]?.id);

  function InputUpdate(value) {
    myTodos.push({
      title: value,
      id: ++currentId,
      completed: false,
    });
    setMyTodos(myTodos);
    setCurrentId(currentId);
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
  }

  function deleteAll() {
    myTodos = [];
    setMyTodos(myTodos);
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
          <DeleteAllButton onDelete={deleteAll} />
          {!myTodos.length && <span>Нет Задач</span>}
          {myTodos.length !== 0 && (
            <MyList
              myTodos={myTodos}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default App;
