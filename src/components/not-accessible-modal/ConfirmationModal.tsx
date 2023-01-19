import { IoMdClose } from "react-icons/io";
import {
  Overlay,
  ModalContainer,
  SectionsWrapper,
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
        <SectionsWrapper>
          <Header>
            <h1>{title}</h1>
          </Header>
          <Content>
            <p>{description}</p>
          </Content>
          <Footer>
            <button onClick={onClose}>Cancelar</button>
            <button onClick={onAccept}>Aceptar</button>
          </Footer>
        </SectionsWrapper>
        <IconWrapper>
          <div onClick={onClose}>
            <IoMdClose />
          </div>
        </IconWrapper>
      </ModalContainer>
    </Overlay>
  );
};
