import React, {Component} from 'react'
import Todos from './todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    lastid: 3,
    todos: [
      {id: 1, content: 'Buy Milk'},
      {id: 2, content: 'Learn React'}
    ]
  };
  addTodo = (todo) => {
    todo.id = this.state.lastid;
    const cpy_todos = [...this.state.todos, todo];
    this.setState({
      lastid: todo.id + 1,
      todos: cpy_todos
    })
  }
  deleteTodo = (id) => {
    const cpy_todos = this.state.todos.filter(todo => {
      return todo.id !== id 
    });
    this.setState({
      todos: cpy_todos
    });
  } 
  render(){
    return (
      <div className="toddo-app container">
        <h1 className="center blue-text">Todo's:</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo }/>
      </div>
    );
  }
}

export default App;
