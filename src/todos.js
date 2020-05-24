import React from 'react';
import './style.css';
function Todos(props){
  
  const items=props.items;
  const listItems = items.map(item =>
    {
    return <div className="child-container" key={item.key}>
     <input type="checkbox"  id="childCheckbox" ></input>
    <p>{item.text}</p>
    <span id="deletebtn" onClick={()=>props.deleteItem(item.key)}>X</span>   
     </div>
    })
  return(
  <div>{listItems}</div>
  
  )

}
export default Todos;