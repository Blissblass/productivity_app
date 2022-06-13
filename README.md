# README

# Project: Productivity App

![Home page of task.io](https://i.imgur.com/1SNhlQ3.png)

[Check out the demo here](https://erayalkis.github.io/productivity_app)

Task.io is a personal project I created with my goal being to create a form of Scheduling app where you can create Lists, and then create draggable Tasks for a List so that you can reorder them. I initially wrote some of the code for this myself, but then decided to use react-beautiful-dnd as it was much more efficient and also had better accessibility features.


# Challenges

One major problem i faced while building Task.io was getting the Tasks to be draggable. I first started by writing code for this myself, but the problem turned out to be much more complex than I first thought. After trying for a day or two, I decided to instead use an already available package for it. 
After this, I set up react-beautiful-dnd and wrapped the Lists and Tasks in their respective beautiful-dnd components.

A Task item is handled like this:

```javascript
    <Draggable key={task.id} draggableId={`${task.id}`} index={idx}>
      {provided => (
        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
          <li className="list-group-item list-group-item-primary m-1" onClick={handleComplete}>
              <h4 className="m-1">
                { done ?
                    <del>{task.description}</del>
                  :
                    {task.description}
                }
              </h4>
          </li>
        </div>
      )}
    </Draggable>
```

And a TaskList item that wraps the Tasks is handled like this:

```javascript
    <Droppable droppableId={props.listId}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <ul className="list-group list-group-flush text-start w-50 mx-auto">
            { taskData.map((taskItem, idx) => (
              <Task key={taskItem.id} task={taskItem} idx={idx} />
            ))}
          </ul>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
```

After this, a handleDrag event handler updates the state in response to a onDragEnd event

```javascript
  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;
    const newTasks = [...taskData]; // Create a deep copy of the state
    
    if(!destination || (destination.index === source.index && destination.droppableId !== "drop-delete")) {
      return; 
      
      // If Task item is dropped on an empty spot,
        // or in the same Droppable component (and not a drop-delete Droppable component), we don't do anything
    }

    if(destination.droppableId === "drop-delete") {
      setTaskData(old => old.filter(ele => ele.id !== parseInt(draggableId)));
      fetch(`https://taskio-backend.herokuapp.com/task/${draggableId}`, {
        method: 'DELETE'
      });
      return; 
      
      // If dropped onto the Droppable component with the ID of drop-delete , remove the task from the state
       // and send a DELETE call to the backend and then return from the function
    }
    
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, taskData.find(task => task.id === parseInt(draggableId)));
    setTaskData(newTasks);
    
    // Else, remove task from its inital spot, get the task object from the old state, and insert a copy of it into the new state.
  };
```

Another challenge that I faced with this project was the updating of the Task indices. At first I thought about updating the indices on every single onDragEnd event, however that was far too inefficient and would clog up the server too much as we'd need to update every item on every single drop. After a short bit however, I instead set up a useEffect cleanup function that would update the indices whenever the user left the page by calling a handleLeave function.

```javascript

  useLayoutEffect(() => {

    return () => {
      handleLeave();
    }; 
  }, []);
  
  const handleLeave = () => {
    const orderData = {};

    unmountData.current.forEach(ele => orderData[ele.id] = {index: unmountData.current.indexOf(ele)});
    fetch('https://taskio-backend.herokuapp.com/api/reorder_list', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({to_do: {orderData}})
    });
```
However, I soon realised that React doesn't unmount the component when the user *refreshes* the page. After reading some [documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload), I realised that I can add an event listener for "beforeunload" to the useEffect hook, and this ended up solving the problem entirely.

# Screenshots

![Lists page for task.io](https://i.imgur.com/1QUkWSf.png)

![List page for task.io](https://i.imgur.com/CXazdqA.png)

# To Do

Changing the style of a Task item when it's being dragged would be a reliable way to communicate the action to a user.
Shortening the width of a draggableItem when its hovered over a Droppable for deletion is a feature that I'm planning on adding in the future, as an indicator for this would be an effective way for communicating the action to the user.

# Technologies used

Bootstrap for fast and easy styling, using the CSS grid classes provided by bootstrap for the app. The data for Users, To Dos and Tasks are saved on the Rails PostgresSQL database. For the Drag n Drop functionaly, I used the [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) npm package.




