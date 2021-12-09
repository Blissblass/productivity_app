import { useEffect } from 'react';

const ListItem = (props) => {
  const { title } = props;
  
  useEffect(() => {
    console.log(props.title);
  });

  return(
    <div className="mt-3">
      <div className="card w-75 mx-auto">
        <h3>{title}</h3>
      </div>
    </div>
  )
};

export default ListItem;