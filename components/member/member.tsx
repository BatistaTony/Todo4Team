import { useContext, useState } from "react";
import { todoContext } from "../todoContext";
import { IContextTodo } from "../types";
import { FormSTyle } from "./styleMember";

export default function Member() {
  const [members, setMember] = useContext<any>(todoContext);
  const [name, setName] = useState<string>("");

  const handleChange = (event: any) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const addMember = () => {
    setMember(name);
  };

  return (
    <FormSTyle>
      <input
        type="text"
        name="who"
        onChange={handleChange}
        placeholder="member's name"
        id=""
      />
      <button onClick={addMember}>Add</button>
    </FormSTyle>
  );
}
