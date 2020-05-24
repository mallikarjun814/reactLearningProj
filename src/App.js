import React from 'react';
import './style.css';
import Todos from './todos.js';
import Count from './count.js'


class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      items:[],
      count:0,
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }
  handleInput=e=>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem=e=>{
    e.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem)
    if(newItem.text !== '' ){
    const newItems=[...this.state.items,newItem]
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
  this.setState({
    count:this.state.count+1
  })
  }
deleteItem=key=>{
  const filteredItems=this.state.items.filter(item => item.key !== key
  );
  this.setState({
    items:filteredItems,
    count:this.state.count-1

  });
}
handleCount=()=>{
  this.state.items.map(item=>{
    this.setState({
      count:this.state.count
    })
    return this.state.count
  })
}
handleClear=()=>{
  
}
select_btn=()=>{
  
   
}
render(){
    
   
   return (
    <div id="app">
         <div id="todo">todos</div>
            <form id="inputContainer"  onSubmit={this.addItem}>
                <div id="select-btn" onClick={this.select_btn}>V</div>
                <input type="text" placeholder="Enter new task" id="todo-input"
                 value={this.state.currentItem.text} onChange={this.handleInput}></input>
                <button id="enter-btn" type="submit" onClick={this.handleCount}>OK</button>
            </form>
      <Todos className="todo" items={this.state.items} deleteItem={this.deleteItem} count={this.handleCount} 
        select={this.select_btn}></Todos>
   
      <Count countEle={this.state.count} clearbtn={this.handleClear}></Count>
    
             
      </div>
    

  );
}
}

export default App;
