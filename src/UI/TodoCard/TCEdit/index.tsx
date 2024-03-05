import React, { ChangeEvent } from "react";
import { styles } from "UI/TodoCard/TCEdit/index.styles.ts";

interface TCEditProps {
  newText: string;
  handleSaveEditTodo: () => void;
  handleCancelEditTodo: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TCEdit = (props: TCEditProps) => {
  return (
    <>
      <InputSC
        type="text"
        value={props.newText}
        onChange={props.handleChange}
      />
      <ButtonsContainerSC>
        <ButtonSC onClick={props.handleSaveEditTodo}>Изменить</ButtonSC>
        <ButtonSC onClick={props.handleCancelEditTodo}>Отмена</ButtonSC>
      </ButtonsContainerSC>
    </>
  );
};

const { InputSC, ButtonsContainerSC, ButtonSC } = styles;

export default React.memo(TCEdit);
