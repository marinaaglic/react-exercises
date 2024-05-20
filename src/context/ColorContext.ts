import { createContext, useContext, Dispatch, SetStateAction } from "react";

type ColorContextType = {
  selectedColor: string;
  setColor: Dispatch<SetStateAction<string>>;
};

export const ColorContext = createContext<ColorContextType | undefined>(
  undefined
);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
