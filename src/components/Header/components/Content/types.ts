import { PropsWithChildren } from "react";

export interface ContentProps extends PropsWithChildren {
  isSaveModeSave: boolean;
  resetModal: VoidFunction;
}
