import { useState } from "react";

const Task = (props) => {
  const { task, done : initialDone} = props;
  const [done, setDone] = useState(initialDone);

  return (
    <li style={{ textDecoration: done ? "line-through" : "initial" }}>
      <input
        id="done"
        type="checkbox"
        checked={done}
        onChange={(event) => {
          setDone(event.target.checked);
        }}
      />
      {task}
    </li>
  );
};

export default Task;