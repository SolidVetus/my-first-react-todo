import { create } from "zustand";
import { dataTodos } from "../MyData.js";

export const useTodos = create((set) => ({
  myTodos: dataTodos,
  addTodo: (title) =>
    set((state) => {
      const newTodo = { title, id: new Date(), completed: false };
      return { myTodos: [...state.myTodos, newTodo] };
    }),
  deleteAll: () => set(() => ({ myTodos: [] })),
  toggleTodo: (id) =>
    set((state) => {
      const currentIndex = state.myTodos.findIndex((task) => task.id === id);
      state.myTodos[currentIndex].completed =
        !state.myTodos[currentIndex].completed;
      return { myTodos: [...state.myTodos] };
    }),
  deleteTodo: (id) =>
    set((state) => {
      return { myTodos: state.myTodos.filter((task) => task.id !== id) };
    }),
}));
