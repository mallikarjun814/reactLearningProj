import React from 'react';
import './style.css';
function Count(props) { 
    return <div id="countContainer" ><span>count:<span>{props.countEle}</span></span>
    <span id="clear_all" >clear all</span></div>
    
    
}
 
export default Count;