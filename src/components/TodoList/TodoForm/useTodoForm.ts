import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import { addTodo } from "store/reducers/todos/todosSlice.ts";

export const useTodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      dispatch(addTodo(todo.trim()));
      setTodo("");
    }
  };

  return { todo, handleChange, handleAddTodo };
};
