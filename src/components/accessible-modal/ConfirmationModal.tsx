import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

import {
  Overlay,
  ModalContainer,
  Header,
  Content,
  Footer,
  IconWrapper,
} from "./ConfirmationModal.styled";

type ClickEvent =
  | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  | MouseEvent
  | TouchEvent;

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
  const [activeElement, setActiveElement] = useState(document.activeElement);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveElement(document.activeElement);
  }, []);

  const close = (event: ClickEvent) => {
    event.preventDefault();

    if (activeElement instanceof HTMLElement) {
      activeElement.focus();
    }

    onClose();
  };

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      close(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
  });

  return createPortal(
    <Overlay>
      <ModalContainer
        ref={ref}
        role="dialog"
        aria-modal
        aria-labelledby={title}
        // Since the modal's static text (description) describes the modal's function, it is not necessary to add the aria-describedBy
      >
        <IconWrapper onClick={close}>
          <IoMdClose />
        </IconWrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Content>{description}</Content>
        <Footer>
          <button onClick={onAccept}>Aceptar</button>
          <button onClick={close}>Cancelar</button>
        </Footer>
      </ModalContainer>
    </Overlay>,
    document.body
  );
};
