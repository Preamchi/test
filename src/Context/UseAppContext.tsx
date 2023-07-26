// AppContext.js
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ContextProps = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  action: string;
  setAction: Dispatch<SetStateAction<string>>;
  outputText: string;
  setOutputText: Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<ContextProps>({
  inputText: "",
  setInputText: () => {},
  action: "",
  setAction: () => {},
  outputText: "",
  setOutputText: () => {},
});

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [inputText, setInputText] = useState("");
  const [action, setAction] = useState("");
  const [outputText, setOutputText] = useState("");

  const value: ContextProps = {
    inputText,
    setInputText,
    action,
    setAction,
    outputText,
    setOutputText,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
