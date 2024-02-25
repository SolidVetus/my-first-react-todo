import "./IndexMy.css";
import MyForm from "./components/MyForm/MyForm.jsx";
import Header from "./components/Header/Header.jsx";
import DeleteAllButton from "./components/DeleteAllBtn/DeleteAllBtn.jsx";
import MyList from "./components/MyList/MyList.jsx";
import { useSelector } from "react-redux";

function App() {
  const myTodos = useSelector((state) => state.todos);

  return (
    <>
      <Header />
      <div className="container">
        <MyForm />
        <section className="todos-section">
          <DeleteAllButton />
          {!myTodos.length && <span>Нет Задач</span>}
          {myTodos.length !== 0 && <MyList />}
        </section>
      </div>
    </>
  );
}

export default App;
