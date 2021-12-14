import { useLayoutEffect, useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import CreateTask from '../CreateTask/CreateTask';
import TaskList from '../Task/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import DeleteTask from '../DeleteTask/DeleteTask';
import { useRef } from 'react';

const ToDo = () => {
  const params = useParams();
  const [listData, setListData] = useState({});
  const [taskData, setTaskData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const unmountData = useRef();

  useEffect(() => {
    fetch(`/api/todo/${params.list_id}`)
      .then(res => res.json())
      .then(data => {
        setListData(data.list);
        setTaskData(data.tasks);
        setIsLoading(false);
      });
  }, [params]);

  useEffect(() => {
    unmountData.current = taskData;
  }, [taskData]);

  useLayoutEffect(() => {
    console.log("mounting!");

    return () => {
      const orderData = {};

      unmountData.current.forEach(ele => orderData[ele.id] = {index: unmountData.current.indexOf(ele)});
      fetch('/api/reorder_list', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
        body: JSON.stringify({to_do: {orderData}})
      })
    }; 
  }, []);

  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;
    const newTasks = [...taskData];
    
    if(!destination || (destination.index === source.index && destination.droppableId !== "drop-delete")) {
      return;
    }

    if(destination.droppableId === "drop-delete") {
      setTaskData(old => old.filter(ele => ele.id !== parseInt(draggableId)));
      fetch(`/task/${draggableId}`, {
        method: 'DELETE'
      });
      return;
    } 


    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, taskData.find(task => task.id === parseInt(draggableId)));
    setTaskData(newTasks);
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