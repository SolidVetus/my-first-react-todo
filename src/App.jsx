import "./IndexMy.css";
import MyForm from "./components/MyForm/MyForm.jsx";
import Header from "./components/Header/Header.jsx";
import DeleteAllButton from "./components/DeleteAllBtn/DeleteAllBtn.jsx";
import MyList from "./components/MyList/MyList.jsx";
import { useTodos } from "./stores/useMyTodo.js";

function App() {
  const { deleteAll, myTodos } = useTodos();

  return (
    <>
      <Header />
      <div className="container">
        <MyForm />
        <section className="todos-section">
          <DeleteAllButton onDelete={deleteAll} />
          {!myTodos.length && <span>Нет Задач</span>}
          {myTodos.length !== 0 && <MyList />}
        </section>
      </div>
    </>
  );
}

export default App;
