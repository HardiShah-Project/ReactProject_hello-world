import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './todo.css';
import { addTodoService } from "../../../services/TodoService";

const AddTodo = () => {
    let history = useHistory();
    const [todo, setTodo] = useState({
        title: ""
    });
    const onInputChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    };
    const onSubmit = async e => {
        e.preventDefault();
        await addTodoService(todo)
        history.push("/");
    }
    const { title } = todo;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 AddStyle" >
                <h2 className="text-center mb-4">Add A Todo</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Freaking Todo"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add Todo</button>
                </form>
            </div>
        </div>
    )
};
export default AddTodo;