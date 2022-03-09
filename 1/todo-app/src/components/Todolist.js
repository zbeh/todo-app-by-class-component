import React, { Component } from 'react'
import Todoitem from './Todoitem';

export default class Todolist extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate(prevProps){
    if(prevProps!==this.state){
      <Todoitem/>
    }
  }
    
  render() {
    const{item,handleDelete,handleEdit}=this.props
    return (
      <ul className='list-group list-container bg-warning my-5'>
        <h3 className='text-capitalize text-center text-white'>لیست کارها</h3>
        {item.map(item=>{return(
          <Todoitem key={item.id} 
            title={item.text}
            handleEdit={()=>handleEdit(item.id)}
            handleDelete={()=>handleDelete(item.id)}
          />
        )})}
      </ul>
    )
  }
}
