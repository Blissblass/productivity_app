
const NewListButton = (props) => {

  return(
    <div>
      <input type="button" className="btn btn-primary btn-lg text-white position-absolute" style={{bottom:30, right:50}} 
        value="New list" onClick={props.onClick} />
    </div>
  )
};

export default NewListButton;