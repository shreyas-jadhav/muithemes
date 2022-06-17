import React, { PropsWithChildren, useState } from "react";
import { useMediaQuery } from "@mui/material";
export type PreviewSize = "xs" | "sm" | "md" | "lg" | "xl" | false;
export interface PreviewState {
  previewSize: PreviewSize;
  setPreviewSize: React.Dispatch<React.SetStateAction<PreviewSize>>;
}

const PreviewContext = React.createContext<PreviewState>(undefined!);
export const usePreview = () => React.useContext(PreviewContext);

export const PreviewProvider = ({ children }: PropsWithChildren<{}>) => {
  const [previewSize, setPreviewSize] = useState<PreviewSize>(`md`);
  return (
    <PreviewContext.Provider
      value={{
        previewSize,
        setPreviewSize,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};
