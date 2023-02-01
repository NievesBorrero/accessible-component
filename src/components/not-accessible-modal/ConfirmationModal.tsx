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
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onClose: () => void;
  onAccept: () => void;
}

export const ConfirmationModal = ({
  title,
  description,
  onClose,
  onAccept,
  primaryButtonText,
  secondaryButtonText,
}: ConfirmationModalProps) => {
  return (
    <Overlay>
      <ModalContainer>
        <SectionsWrapper>
          <Header>{title}</Header>
          <Content>{description}</Content>
          <Footer>
            <button onClick={onClose}>{primaryButtonText}</button>
            <button onClick={onAccept}>{secondaryButtonText}</button>
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
