import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLocalTodos } from "./hooks/useLocalTodos.ts";
import { RootStore } from "store/store.ts";
import { Todo } from "lib/types";

interface TodosState {
  list: Todo[];
}

const initialState: TodosState = {
  list: useLocalTodos.getTodosFromLocalStorage(),
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.list.push(newTodo);
      useLocalTodos.saveTodosToLocalStorage(state.list);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        useLocalTodos.saveTodosToLocalStorage(state.list);
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      useLocalTodos.saveTodosToLocalStorage(state.list);
    },

    editTodo: (
      state,
      action: PayloadAction<{ id: number; newText: string }>,
    ) => {
      const todo = state.list.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
        useLocalTodos.saveTodosToLocalStorage(state.list);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

export const selectTodos = (state: RootStore) => state.todos.list;

export default todosSlice.reducer;
