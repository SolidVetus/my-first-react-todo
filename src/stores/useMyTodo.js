import { create } from "zustand";
import { dataTodos } from "./MyData.js";

export const useTodos = create(set => ({
    myTodos : dataTodos,

    addTodo: (dataTodos.title) = set(state => {
        const newTodo = {title, id, completed: false}
        return {myTodos: [
            ...state.todos, newTodo
        ]}
    })
}))

// function InputUpdate(value) {
//     dispatch({
//       type: "add",
//       payload: {
//         title: value,
//         currentId: ++currentId,
//       },
//     });
//     setCurrentId(currentId);
//     console.log(state);
//   }