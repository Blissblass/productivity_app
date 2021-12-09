
const NoLists = (props) => {


  
  return(
    <div className="mt-3">
      <div>
        <h3>No To-Do's found!</h3>
        <input type="button" className="btn btn-primary w-25 p-2 text-white" value="Create a list now" 
          onClick={props.handleOpen} />
      </div>
    </div>
  );
};

export default NoLists;