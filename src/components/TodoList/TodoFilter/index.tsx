import React from "react";
import { styles } from "components/TodoList/TodoFilter/index.styles.ts";
import { useTodoFilter } from "components/TodoList/TodoFilter/useTodoFilter.ts";

const FilterTodo: React.FC = () => {
  const { handleFilterCompleted, handleFilterNotCompleted, handleSortDefault } =
    useTodoFilter();

  return (
    <ContainerSC>
      <ButtonSC onClick={handleFilterCompleted}>Показать выполненные</ButtonSC>
      <ButtonSC onClick={handleFilterNotCompleted}>
        Показать не выполненные
      </ButtonSC>
      <ButtonSC onClick={handleSortDefault}>Показать все задачи</ButtonSC>
    </ContainerSC>
  );
};

const { ContainerSC, ButtonSC } = styles;

export default React.memo(FilterTodo);
