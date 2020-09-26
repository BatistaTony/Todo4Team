import { useContext } from "react";
import { todoContext } from "../todoContext";
import { ListStyle, Task } from "./liststyle";

export default function ListTask() {
  const [todos, setToDo] = useContext<any[]>(todoContext);

  const MarkAsDone = async (index) => {
    const oldToDo = [...todos];

    oldToDo[index] = await {
      ...oldToDo[index],
      isDone: !oldToDo[index].isDone,
    };

    setToDo(oldToDo);
  };

  const deleteTask = (index) => {
    const oldToDo = [...todos];

    oldToDo.splice(index, 1);

    setToDo(oldToDo);
  };

  return (
    <ListStyle>
      {todos.map((value, key) => (
        <Task isDone={value.isDone} key={key}>
          <button onClick={() => deleteTask(key)}>Delete</button>
          {value.task}{" "}
          <span onClick={() => MarkAsDone(key)}>
            {value.isDone ? "done" : "Pending..."}
          </span>
        </Task>
      ))}
    </ListStyle>
  );
}
