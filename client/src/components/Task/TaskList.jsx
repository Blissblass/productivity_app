import Task from '../Task/Task';


const TaskList = (props) => {
  const { listData } = props;

  return(
    <div>
      <ul className="list-group list-group-flush text-start w-50 mx-auto">
        { listData.tasks.map(taskItem => <Task task={taskItem} /> ) }
      </ul>
    </div>
  )
};

export default TaskList;