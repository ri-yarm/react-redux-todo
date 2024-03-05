import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "store/reducers/todos/todosSlice.ts";

import TodoForm from "components/TodoList/TodoForm";
import TodoCard from "UI/TodoCard";
import { styles } from "components/TodoList/index.styles.ts";

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ContainerSC>
      <TodoForm />
      <ListSC>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC } = styles;

export default React.memo(TodoList);
