import React, { useRef } from "react";
import { useEffect } from "react";

import { IoMdClose } from "react-icons/io";
import { Overlay } from "./Overlay/Overlay";

import {
  ModalContainer,
  IconWrapper,
  Header,
  Content,
  Footer,
} from "./Modal.styled";

type ClickEvent = MouseEvent | TouchEvent;

interface ModalProps {
  close: () => void;
}

export const Modal = ({ close }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: ClickEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      close();
    };

    document.addEventListener("mousedown", listener);
  });

  return (
    <Overlay>
      <ModalContainer ref={ref}>
        <IconWrapper>
          <IoMdClose />
        </IconWrapper>
        <Header>
          <h1>Modal 360</h1>
        </Header>
        <Content>
          <p>
            Lorem fistrum a wan fistro no te digo trigo por no llamarte Rodrigor
            te voy a borrar el cerito pupita torpedo. A wan sexuarl pupita te
            voy a borrar el cerito fistro amatomaa hasta luego Lucas ese que
            llega a peich. Amatomaa no te digo trigo por no llamarte Rodrigor
            torpedo diodenoo papaar papaar. Te voy a borrar el cerito no puedor
            diodeno te voy a borrar el cerito quietooor va usté muy cargadoo ese
            que llega. A gramenawer te voy a borrar el cerito llevame al sircoo
            te va a hasé pupitaa. La caidita a gramenawer quietooor me cago en
            tus muelas a gramenawer qué dise usteer ahorarr pecador quietooor
            está la cosa muy malar.
          </p>
          <p>
            Caballo blanco caballo negroorl fistro está la cosa muy malar me
            cago en tus muelas tiene musho peligro me cago en tus muelas de la
            pradera. La caidita sexuarl ahorarr me cago en tus muelas llevame al
            sircoo. Te va a hasé pupitaa a gramenawer me cago en tus muelas a
            peich ese pedazo de llevame al sircoo. No te digo trigo por no
            llamarte Rodrigor al ataquerl hasta luego Lucas te voy a borrar el
            cerito tiene musho peligro torpedo pupita a gramenawer. Quietooor a
            peich hasta luego Lucas va usté muy cargadoo a wan.
          </p>
        </Content>
        <Footer>
          <button>Aceptar</button>
          <button>Cancelar</button>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};
