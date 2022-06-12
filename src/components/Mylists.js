import axios from 'axios';
import React, { Component } from 'react';
import Header from './header';
import config from './../config.json'
import './css/list.css'
import Alert from './Alert';
export default class Mylists extends Component {
    constructor(){
        super();
        this.state = {
            todos : [],
            alertVis : false,
            alertMes : ""
        }
        this.renderTodos()
    }
    deleteTodo(id){
        let query = config.deleteTodos + "?taskid=" + id;
        axios.delete(query,{
            headers : {
                'Authorization' : window.localStorage.token
            }
        }).then(function (response) {
          console.log(response);
          this.renderTodos();
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    renderTodos(){
        console.log("helo")
        axios.get(config.getTodo,{
            headers:{
                'Authorization' : window.localStorage.token,
            }
        }).then((result)=>{
            console.log(result.data.data.tasks)
            let savedTodos = [];
            let i = 1;
            result.data.data.tasks.forEach(element => {
                i++;
                savedTodos.push(<li key={i}>{element.task}<button onClick={()=>{this.deleteTodo(element.taskid)}}>Delete</button></li>)
            });
            console.log(savedTodos);
            this.setState ({
                todos : savedTodos
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
   
    deleteTodo(id){
        let query = config.deleteTodos + "?taskId=" + id;
        let that = this;
        axios.delete(query,{
            headers : {
                'Authorization' : window.localStorage.token
            }
        }).then(function (response) {
          console.log(response);
          that.renderTodos();
          
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
    addTodo(){
        let that = this;   //context change
        let task = document.getElementById('inputTodo')
        axios.post(config.todoPost,{
            "task": task.value,
            headers:{
                'authorization' : window.localStorage.token,
            }
        }).then(function (response) {
          console.log(response);
          that.setState({alertVis : true,alertMes:"Task Added Successsfully!!"})
          that.renderTodos();
          
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
    
    render() {
    return <div className='fullList'>
        <Header name="Your List"/>;
        <div className='alert'>{this.state.alertVis ? <Alert message={this.state.alertMes}/> : null }</div>
        <input type="text" autocomplete="off" placeholder="Enter your todo" class="toDoInput" id="inputTodo" />
        <button onClick={this.addTodo.bind(this)}>Add</button>
        <ul class="todos" id="todos">
            {this.state.todos}
        </ul>
    </div>;
  }
}
