import { createContext, useState } from "react";
import { IMember, ITodo } from "./types";

export const todoContext = createContext([]);

interface IProps {
  children: any;
}

export const ContextProvider = ({ children }: IProps) => {
  const [todos, setToDo] = useState<Array<ITodo> | null>([]);
  const [members, setMember] = useState<Array<IMember> | null>([{name: "Tony"}]);

  return (
    <todoContext.Provider value={[todos, setToDo, members, setMember]}>
      {children}
    </todoContext.Provider>
  );
};
