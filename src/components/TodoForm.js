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
            <div className="container has-text-centered box" style={{ maxWidth: '500px' }}>
                <form onSubmit = {this.OnSubmitHandler}>
                    <input
                        className="input is-rounded is-large"
                        id = "addTodo"
                        name = "addTodo"
                        type = "text"
                        placeholder = "Enter your todo here!"
                        value = {this.state.itemText}
                        onChange = {this.OnChangeHandler}
                    />
                    <div><button className="button is-medium is-primary is-fullwidth">Add todo</button></div>
                </form>
                <div><button className="button is-medium is-danger is-fullwidth" onClick = {this.props.deleteItem}>Clear todo</button></div></div>
            </div>
        )
    }

}

export default TodoForm;