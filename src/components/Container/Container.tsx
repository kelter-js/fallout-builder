import { FC, PropsWithChildren } from "react";
import { InnerContainer } from "./Container.styled";

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <InnerContainer>{children}</InnerContainer>
);
