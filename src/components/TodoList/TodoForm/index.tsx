import React from "react";

import { useTodoForm } from "components/TodoList/TodoForm/useTodoForm.ts";
import { styles } from "components/TodoList/TodoForm/index.styles.ts";

const TodoForm = () => {
  const { todo, handleChange, handleAddTodo } = useTodoForm();

  return (
    <ContainerSC>
      <InputSC
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder={"Посмотреть резюме"}
      />
      <ButtonSC onClick={handleAddTodo}>Создать</ButtonSC>
    </ContainerSC>
  );
};

const { ContainerSC, InputSC, ButtonSC } = styles;

export default React.memo(TodoForm);
