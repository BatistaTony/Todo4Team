import { useContext, useState } from "react";
import { todoContext } from "../todoContext";
import { IContextTodo, IMember, ITodo } from "../types";
import { InputStyle } from "./inputStyle";

export default function FormTask() {
  const [todos, setToDo, members] = useContext<any>(
    todoContext
  );
  const [task, setTask] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (task && !checkIfExist(task)) {
      setToDo([{ task, isDone: false }, ...todos]);
      setTask("");
    }
  };

  const handleChange = (event: any) => {
    setTask(event.target.value);
  };

  const checkIfExist = (task: string) => {
    const tasks = todos.filter((taskToDo) => task === taskToDo.task);

    if (tasks.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <InputStyle>
      <select name="who" id="">
        <option value="Nenhum">Nenhum</option>
        {members.map((member: IMember) => (
          <option value={member.name}>{member.name}</option>
        ))}
      </select>
      <input type="date" name="when" id="" />
      <input
        type="text"
        onChange={handleChange}
        value={task}
        placeholder="Task"
        name="task"
        id=""
      />
      <button onClick={handleSubmit}>Add</button>
    </InputStyle>
  );
}
