import styled from "styled-components";

export const ModalContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(255,255,255)",
  height: "auto",
  width: "640px",
  padding: "1rem",
});

export const IconWrapper = styled.div({
  display: "flex",
  justifyContent: "flex-end",
});

export const Header = styled.div({
  display: "flex",
  justifyContent: "center",
  paddingRight: "1rem",
});

export const Footer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  padding: "1rem 1rem 0 1rem",
});

export const Content = styled.div({
  paddingRight: "1rem",
});
