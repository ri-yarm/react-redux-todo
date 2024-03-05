import { Todo } from "lib/types";
import { KeyLocalStorage } from "lib/constants";

export const useLocalTodos = {
  getTodosFromLocalStorage: (): Todo[] => {
    const todosStr = localStorage.getItem(KeyLocalStorage);
    return todosStr ? JSON.parse(todosStr) : [];
  },

  saveTodosToLocalStorage: (todos: Todo[]): void => {
    localStorage.setItem(KeyLocalStorage, JSON.stringify(todos));
  },
};
