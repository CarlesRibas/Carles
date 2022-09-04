import Task from "./Task";

const List = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((taskObject, index) => {
        const { task, done } = taskObject;
        return (
          <li key={index}>
            <Task task={task} done={done} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;