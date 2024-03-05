import React from "react";
import { styles } from "UI/TodoCard/TCInfo/index.styles.ts";
import EditIcon from "assets/Edit.svg";
import DeleteIcon from "assets/Delete.svg";

interface TCInfoProps {
  text: string;
  handleEditTodo: () => void;
  handleDeleteTodo: () => void;
}

const TCInfo = (props: TCInfoProps) => {
  return (
    <>
      <TitleSC>{props.text}</TitleSC>
      <ButtonsContainerSC>
        <ButtonSC onClick={props.handleEditTodo}>
          <EditIcon />
        </ButtonSC>
        <ButtonSC onClick={props.handleDeleteTodo}>
          <DeleteIcon />
        </ButtonSC>
      </ButtonsContainerSC>
    </>
  );
};

const { TitleSC, ButtonsContainerSC, ButtonSC } = styles;

export default React.memo(TCInfo);
