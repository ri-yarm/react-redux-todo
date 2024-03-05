import { useDispatch } from "react-redux";
import {
  filterCompletedTodo,
  filterNotCompletedTodo,
  defaultSortTodo,
} from "store/reducers/todos/todosSlice.ts";

export const useTodoFilter = () => {
  const dispatch = useDispatch();

  const handleFilterCompleted = () => {
    dispatch(filterCompletedTodo());
  };

  const handleFilterNotCompleted = () => {
    dispatch(filterNotCompletedTodo());
  };

  const handleSortDefault = () => {
    dispatch(defaultSortTodo());
  };

  return { handleFilterCompleted, handleFilterNotCompleted, handleSortDefault };
};
