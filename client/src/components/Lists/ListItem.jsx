import { useEffect } from 'react';

const ListItem = (props) => {
  const { title } = props;
  
  useEffect(() => {
    console.log(props.title);
  });

  return(
    <div>
      <h6>{title}</h6>
    </div>
  )
};

export default ListItem;