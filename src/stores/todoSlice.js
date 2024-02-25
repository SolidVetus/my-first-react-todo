import { createSlice, nanoid } from "@reduxjs/toolkit";
import { dataTodos } from "../MyData.js";

const initialState = dataTodos;

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload,
        id: nanoid(),
        completed: false,
      };
      state.push(newTodo);
    },
    deleteAll: () => [],
    toggleTodo: (state, action) => {
      const currentIndex = state.findIndex(
        (task) => task.id === action.payload
      );
      state[currentIndex].completed = !state[currentIndex].completed;
      return state;
    },
    deleteTodo: (state, action) =>
      state.filter((task) => task.id !== action.payload),
  },
});

