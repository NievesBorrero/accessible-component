import React, { useCallback, useEffect, useRef } from "react";
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
  const activeElement = document.activeElement;

  const ref = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelButtonRef.current?.focus();
  }, []);

  const close = useCallback(
    (event: ClickEvent | KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (activeElement instanceof HTMLElement) {
        activeElement.focus();
      }

      onClose();
    },
    [activeElement, onClose]
  );

  const trapFocus = (event: KeyboardEvent) => {
    if (!ref.current) {
      return;
    }

    const focusableElements = ref.current.querySelectorAll(
      `a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), 
      input:not([disabled]), select:not([disabled]), div[role="button"]`
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (
      !event.shiftKey &&
      firstElement instanceof HTMLElement &&
      document.activeElement === lastElement
    ) {
      firstElement.focus();
      return event.preventDefault();
    }

    if (
      event.shiftKey &&
      lastElement instanceof HTMLElement &&
      document.activeElement === firstElement
    ) {
      lastElement.focus();
      event.preventDefault();
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(event);
      }

      if (event.key === "Tab") {
        trapFocus(event);
      }
    },
    [close]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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
        aria-labelledby="title"
        aria-describedby="desc"
      >
        <SectionsWrapper>
          <Header>
            <h1 id="title">{title}</h1>
          </Header>
          <Content>
            <p id="desc">{description}</p>
          </Content>
          <Footer>
            <button ref={cancelButtonRef} onClick={close} aria-label="Cancelar">
              Cancelar
            </button>
            <button onClick={onAccept} aria-label="aceptar">
              Aceptar
            </button>
          </Footer>
        </SectionsWrapper>
        <IconWrapper>
          <div role="button" onClick={close} aria-label="cerrar" tabIndex={0}>
            <IoMdClose aria-hidden="true" />
          </div>
        </IconWrapper>
      </ModalContainer>
    </Overlay>,
    document.body
  );
};
