import React from "react";

class TodoForm extends React.Component{

    state = {itemText: ""}

    OnChangeHandler = (e) => {
        this.setState({
            itemText: e.target.value
        })
    };

    OnSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({ itemText: "" });

    };


    render(){
        return(
            <div>
                <form onSubmit = {this.OnSubmitHandler}>
                    <input
                        id = "addTodo"
                        name = "addTodo"
                        type = "text"
                        placeholder = "Enter your todo here!"
                        value = {this.state.itemText}
                        onChange = {this.OnChangeHandler}
                    />
                    <div><button>Add todo</button></div>
                </form>
                <div><button>Clear todo</button></div>
            </div>
        )
    }
}