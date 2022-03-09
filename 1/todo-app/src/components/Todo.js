import React, { Component } from 'react'

import Todoform from './Todoform'
import Todolist from './Todolist'

export default class Todo extends Component {
    constructor(props){
      super(props)
      this.state={
      item:[],
        currentItem:{
          text: "",
          id:  ""
        },
        editItem:'false'
           
      }       
    }
    
    handleInput=(event)=>{
      // console.log(event.target.value);
      this.setState({currentItem:{text:event.target.value,id:Math.floor(Math.random()*1000)}})
    }
    
    handleSubmit=(e)=>{
      e.preventDefault()
      const newItem= this.state.currentItem
      // console.log(newItem);
      const newItems=[...this.state.item,newItem]
      this.setState({item:newItems,currentItem:{text:"",id:""},editItem:'false'})
        
    }
    
    handleEdit=(id)=>{
      const filteredItems=this.state.item.filter(item=>item.id!==id)
      const selectedItem = this.state.item.find(item=>item.id===id)
      this.setState({item:filteredItems,editItem:'true',currentItem:{text:selectedItem.text,id:id}})
    }

    handleDelete=(id)=>{
      const filteredItems=this.state.item.filter(item=>item.id!==id)
      this.setState({item:filteredItems})
    }
    render() {
      console.log(this.state.item);
       return (
          <div className='container'>
              <div className='row'>
                    <div className='col-10 mx-auto mt-5 '>
                      <h3 className='text-capitalize text-center text-danger'> فهرست کارهای روزانه</h3>
                    </div>
                    <Todoform
                      currentItem={this.state.currentItem}
                      handleInput={this.handleInput}
                      handleSubmit={this.handleSubmit}
                      editItem={this.state.editItem}
                      
                    />
                    <Todolist
                      item={this.state.item}
                      handleEdit={this.handleEdit}
                      handleDelete={this.handleDelete}
                    />
                </div>
            </div>
        )
    }
}
 

