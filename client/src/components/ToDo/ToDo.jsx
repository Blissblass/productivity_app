import { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import CreateTask from '../CreateTask/CreateTask';
import TaskList from '../Task/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import DeleteTask from '../DeleteTask/DeleteTask';

const ToDo = () => {
  const params = useParams();
  const [listData, setListData] = useState({});
  const [taskData, setTaskData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(params);
    fetch(`/api/todo/${params.list_id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setListData(data.list);
        setTaskData(data.tasks);
        setIsLoading(false);
      });
  }, [params]);

  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;
    if(!destination || destination.index === source.index) {
      return;
    }

    const newTasks = [...taskData];
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, taskData.find(task => task.id === parseInt(draggableId)));
    setTaskData(newTasks);
    console.log(result);
  };

  return(
    <div>
      { isLoading ? 
        <div className="spinner-border text-primary d-block mx-auto mt-4" style={{height: 150, width: 150}}></div>
      :
        <div className="container text-center mt-3">
          <div>
            <h1><ReactMarkdown children={`*${listData.name}*`}></ReactMarkdown></h1>
            <ReactMarkdown className="text-primary">---</ReactMarkdown>
          </div>
          <CreateTask postId={params.list_id} setTaskData={setTaskData} />
          { 
          taskData.length ?
            <div>
              <DragDropContext onDragEnd={handleDrag}>
                <TaskList taskData={taskData} listId={params.list_id} />
                <DeleteTask />
              </DragDropContext>
            </div>
          :
            <h1 className="mt-3"><em>No tasks found!</em></h1>  
          }
        </div>
      }
    </div>
  )
};

export default ToDo;