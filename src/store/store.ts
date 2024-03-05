import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todos/todosSlice.ts";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
