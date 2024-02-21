/* eslint-disable react-refresh/only-export-components */

export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          title: action.payload.title,
          id: action.payload.currentId,
          completed: false,
        },
      ];
    case "delete":
      return state.filter((task) => task.id !== action.payload);
    case "deleteAll":
      return [];
    case "toggle":
      {
        const currentIndex = state.findIndex(
          (task) => task.id === action.payload
        );
        state[currentIndex].completed = !state[currentIndex].completed;
        console.log(state[currentIndex]);
        return state;
      }
    default:
      return state;
  }
}
