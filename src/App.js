import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

let todoListInitial = [];

class App extends React.Component {

  state = {todoListValue: [...todoListInitial]}

  addItem = (taskName) => {
    const newItem = {
      task: taskName,
      id: new Date(),
      completed: false
    }

  this.setState({todoListValue: [...this.state.todoListValue, newItem]})
  }

  deleteItem = () => {
    this.setState({
      todoListValue: this.state.todoListValue.filter(item => item.completed === false)
    })
  }


  toggleItem = id => {
    this.setState({
      todoListValue: this.state.todoListValue.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item
      })
    })
  }

  render() {
    return (
      <div>
        <h2 className="title">Welcome to your Todo App!</h2>
        <TodoForm
          addItem = {this.addItem}
          deleteItem = {this.deleteItem}
        />
        <TodoList
          toggleItem = {this.toggleItem}
          todoList = {this.state.todoListValue}

        />
      </div>
    );
  }
}

export default App;
