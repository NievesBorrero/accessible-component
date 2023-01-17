import styled from "styled-components";

export const ModalContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(255,255,255)",
  height: "auto",
  width: "640px",
  padding: "1rem",
});

export const Overlay = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 10000,
  width: "100vw",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

export const IconWrapper = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  cursor: "pointer",
  fontSize: "1.75rem",
});

export const Header = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "0 1.75rem",
});

export const Footer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  padding: "1.75rem 1.75rem 0 1.75rem",
});

export const Content = styled.div({
  padding: "0 1.75rem",
});
