import { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';

const ToDo = () => {
  const params = useParams();
  const [listData, setListData] = useState({});

  useEffect(() => {
    console.log(params);
    fetch(`/api/todo/${params.list_id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return(
    <div className="container">
      <h1><ReactMarkdown>*Test*</ReactMarkdown></h1>
      <ReactMarkdown>---</ReactMarkdown>
    </div>
  )
};

export default ToDo;