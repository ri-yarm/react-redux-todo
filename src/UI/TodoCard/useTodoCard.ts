import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import {
  editTodo,
  deleteTodo,
  toggleTodo,
} from "store/reducers/todos/todosSlice.ts";
import { Todo } from "lib/types";

export const useTodoCard = ({ id, text, completed }: Todo) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setTodoText] = useState(text);

  const handleToggleTodo = () => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    setIsEdit(true);
  };

  const handleSaveEditTodo = () => {
    dispatch(editTodo({ id: id, newText }));
    setIsEdit(false);
  };

  const handleCancelEditTodo = () => {
    setTodoText(text);
    setIsEdit(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return {
    isEdit,
    completed,
    text,
    newText,
    handleToggleTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleSaveEditTodo,
    handleCancelEditTodo,
    handleChange,
  };
};
