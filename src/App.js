import React from 'react';
import TodoForm from './components/TodoForm';


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

  deleteItem = () => {
    this.setState({
      todoListValue: this.state.todoListValue.filter(item => item.completed === false)
    })
  }


  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addItem = {this.addItem}
          deleteItem = {this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
