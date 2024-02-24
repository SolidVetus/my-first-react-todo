import { create } from "zustand";
import { dataTodos } from "../MyData.js";

export const useTodos = create((set) => ({
    myTodos : dataTodos,
    addTodo: (title) => set((state) => {
        const newTodo = {title , id: state.myTodos.length + 1, completed: false}
        return {myTodos: [
            ...state.myTodos, newTodo]}
    })
}))
