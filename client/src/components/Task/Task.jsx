

const Task = (props) => {
  const { task } = props;

  return(
    <li className="list-group-item list-group-item-primary m-1">
      <h4 className="m-1">{task.description}{task.id}</h4>
    </li>
  )
};

export default Task;