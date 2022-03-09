import React, { Component } from 'react'

export default class Todoitem extends Component {
  render() {
      const{title,handleEdit,handleDelete}=this.props
    return (
        <li className='list-group-item bg-success todo-container text-capitalize d-flex justify-content-between my-2 bg-list-bg'>
           <h6>{title}</h6>
           <div className='todo-icon'>
              <span className='mx-2 text-icon-color' onClick={handleEdit}> 
                 <i className='fa-solid text-info fa-pen'></i>
                </span>
                <span className='mx-2 ' onClick={handleDelete}> 
                 <i className='fa-solid text-info fa-trash'></i>
                </span>
            </div>
         </li>
    )
  }
}
