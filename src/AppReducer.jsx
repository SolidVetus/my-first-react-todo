import "./IndexMy.css";
import { dataTodos } from "./MyData.js";
import MyForm from "./components/MyForm/MyForm.jsx";
import { useReducer, useState } from "react";
import Header from "./components/Header/Header.jsx";
import DeleteAllButton from "./components/DeleteAllBtn/DeleteAllBtn.jsx";
import MyList from "./components/MyList/MyList.jsx";
import Reducer from "./Reducer.jsx";

function AppReducer() {
  const [state, dispatch] = useReducer(Reducer, dataTodos);
  let [currentId, setCurrentId] = useState(state[state.length - 1]?.id);

  function InputUpdate(value) {
    dispatch({
      type: "add",
      payload: {
        title: value,
        currentId: ++currentId,
      },
    });
    setCurrentId(currentId);
    console.log(state);
  }

  function deleteTask(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  // Как сделвать чтобы работало с помощью useReducer???
  function toggleTask() {
    
  //   // dispatch({
  //   //   type: "toggle",
  //   //   payload: id
  //   // });
  //   // console.log(id)
    
  }

  function deleteAll() {
    dispatch({type: "deleteAll"});
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
          {!state.length && <span>Нет Задач</span>}
          {state.length !== 0 && (
            <MyList
              myTodos={state}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default AppReducer;
