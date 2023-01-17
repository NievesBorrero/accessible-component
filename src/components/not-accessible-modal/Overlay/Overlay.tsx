import React, { ReactNode } from "react";

import { Wrapper } from "./Overlay.styled";

interface OverlayProps {
  children: ReactNode;
}

export const Overlay = ({ children }: OverlayProps) => (
  <Wrapper>{children}</Wrapper>
);
