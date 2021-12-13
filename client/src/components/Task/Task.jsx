
const Task = (props) => {
  const { task } = props;

  return(
    <div>
      <li className="list-group-item">
        <p>{task.description}</p>
      </li>
    </div>
  )
};

export default Task;