

const Task = (props) => {
  const { task } = props;

  return(
    <li className="list-group-item list-group-item-primary">
      <h4 className="m-1">{task.description}</h4>
    </li>
  )
};

export default Task;