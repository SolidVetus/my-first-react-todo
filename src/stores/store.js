import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice.js";

export const { addTodo, deleteAll, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
