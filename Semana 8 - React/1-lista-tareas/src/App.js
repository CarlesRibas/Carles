import "./App.css";
import { useState } from "react";
import taskDB from "./db/taskDB";
import List from "./components/List";
import Form from "./components/Form";


const App = () => {
  const [tasks, setTasks] = useState(taskDB)

  return(
    <div className="App">
      <h1>Lista de tareas</h1>
      <Form tasks={tasks} setTasks={setTasks}/>
      <List tasks={tasks} />
    </div>
  );
};  

export default App;
