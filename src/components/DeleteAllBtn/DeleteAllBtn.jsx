import "./DeleteAllBtn.module.css";
import classes from "./DeleteAllBtn.module.css";
import { deleteAll } from "../../stores/store.js";
import { useDispatch } from "react-redux";

export default function DeleteAllButton() {
  const dispatch = useDispatch();
  return (
    <div className={classes["delete-button-wrap"]}>
      <strong className={classes["delete-button-label"]}>Удалить все</strong>
      <button onClick={() => dispatch(deleteAll())}>❌</button>
    </div>
  );
}
