import React from "react";
import { IoMdClose } from "react-icons/io";
import {
  Overlay,
  ModalContainer,
  IconWrapper,
  Header,
  Content,
  Footer,
} from "./ConfirmationModal.styled";

interface ConfirmationModalProps {
  description: string;
  title: string;
  onClose: () => void;
  onAccept: () => void;
}

export const ConfirmationModal = ({
  title,
  description,
  onClose,
  onAccept,
}: ConfirmationModalProps) => {
  return (
    <Overlay>
      <ModalContainer>
        <IconWrapper onClick={onClose}>
          <IoMdClose />
        </IconWrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Content>{description}</Content>
        <Footer>
          <button onClick={onAccept}>Aceptar</button>
          <button onClick={onClose}>Cancelar</button>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};
