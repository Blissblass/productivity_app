import { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import CreateTask from '../CreateTask/CreateTask';
import TaskList from '../Task/TaskList';

const ToDo = () => {
  const params = useParams();
  const [listData, setListData] = useState({list: null, tasks: null});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(params);
    fetch(`/api/todo/${params.list_id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setListData(data);
        setIsLoading(false);
      });
  }, [params]);

  return(
    <div>
      { isLoading ? 
        <div className="spinner-border text-primary d-block mx-auto mt-4" style={{height: 150, width: 150}}></div>
      :
        <div className="container text-center mt-3">
          <div>
            <h1><ReactMarkdown children={`*${listData.list.name}*`}></ReactMarkdown></h1>
            <ReactMarkdown className="text-primary">---</ReactMarkdown>
          </div>
          <CreateTask postId={params.list_id} />
          { 
          listData.tasks.length ?
            <TaskList listData={listData} />
          :
            <h1 className="mt-3"><em>No tasks found!</em></h1>  
          }
        </div>
      }
    </div>
  )
};

export default ToDo;