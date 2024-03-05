import React from "react";

import { Todo } from "lib/types";
import { useTodoCard } from "UI/TodoCard/useTodoCard.ts";
import { styles } from "UI/TodoCard/index.styles.ts";
import TCInfo from "UI/TodoCard/TCInfo";
import TCEdit from "UI/TodoCard/TCEdit";

const TodoCard = (props: Todo) => {
  const {
    isEdit,
    completed,
    text,
    newText,
    handleDeleteTodo,
    handleToggleTodo,
    handleEditTodo,
    handleSaveEditTodo,
    handleCancelEditTodo,
    handleChange,
  } = useTodoCard(props);

  return (
    <ContainerSC isCompleted={completed}>
      <InputCheckBoxSC
        type="checkbox"
        checked={completed}
        onChange={handleToggleTodo}
      />
      {isEdit ? (
        <TCEdit
          newText={newText}
          handleSaveEditTodo={handleSaveEditTodo}
          handleCancelEditTodo={handleCancelEditTodo}
          handleChange={handleChange}
        />
      ) : (
        <TCInfo
          text={text}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      )}
    </ContainerSC>
  );
};

const { ContainerSC, InputCheckBoxSC } = styles;

export default React.memo(TodoCard);
