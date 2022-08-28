import { useState } from "react";

const Form = (props) => {
  const { tasks, setTasks } = props;
  const [task, setTask] = useState("");

  return (
   <form
    onSubmit={(event) => {
      event.preventDefault();
      const newTask = { task, done : false }
      setTasks([...tasks, newTask]);
      setTask("");
    }}
   >
    <label htmlFor="task">Nueva tarea:</label>
    <input
      type="text"
      maxLength="100"
      id="task"
      value={task}
      onChange={(event) => {
        setTask(event.target.value);
      }}
      required
    />
    <button>Añadir</button>
   </form>
  )
}

export default Form;