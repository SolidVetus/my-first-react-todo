/* eslint-disable react/prop-types */
import "./DeleteAllBtn.module.css";
import classes from "./DeleteAllBtn.module.css";

export default function DeleteAllButton({onDelete}) {
    return (
        <div className={classes["delete-button-wrap"]}>
            <strong className={classes["delete-button-label"]}>Удалить все</strong>
            <button onClick={onDelete}>❌</button>
          </div>
    )
}