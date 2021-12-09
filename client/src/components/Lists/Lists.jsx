import ListItem from './ListItem';

const Lists = (props) => {
  const { lists } = props;
  
  return(
    <div>
      {lists.forEach(item => (<ListItem key={item.id} title={item.name} />))}
    </div>
  )
};

export default Lists;