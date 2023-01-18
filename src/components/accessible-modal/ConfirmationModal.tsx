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
  SectionsWrapper,
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
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setActiveElement(document.activeElement);
    acceptButtonRef.current?.focus();
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
        // TODO 
        aria-label="title"
        aria-labelledby="title"
        aria-describedby="desc"
        // TODO
        tabIndex={-1}
      >
        <SectionsWrapper>
          <Header>
            <h1 id="title">{title}</h1>
          </Header>
          <Content>
            <p id="desc">{description}</p>
          </Content>
          <Footer>
            <button
              onClick={onAccept}
              ref={acceptButtonRef}
              aria-label="aceptar"
            >
              Aceptar
            </button>
            <button onClick={close} aria-label="Cancelar">
              Cancelar
            </button>
          </Footer>
        </SectionsWrapper>
        <IconWrapper>
          <div
            role="button"
            onClick={close}
            aria-label="cerrar modal"
            tabIndex={0}
          >
            <IoMdClose aria-hidden="true" />
          </div>
        </IconWrapper>
      </ModalContainer>
    </Overlay>,
    document.body
  );
};
