import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import './todo.css';
import { editTodoService, getTodoServiceById } from "../../../services/TodoService";

const EditTodo = () => {
    let history = useHistory();
    const { id } = useParams();
    const [todo, setTodo] = useState({
        title: ""

    });
    const onInputChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadTodo();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await editTodoService(id, todo)
        history.push("/");
    };

    const loadTodo = async () => {
        await getTodoServiceById(id)
            .then(res => setTodo(res.data))
            .catch(err => {
                history.push("/NotFound");
            })
    };

    const { title } = todo;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 EditStyle" >
                <h2 className="text-center mb-4">Edit A Todo</h2>
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
                    <button className="btn btn-warning btn-block">Edit Todo</button>
                </form>
            </div>
        </div>
    )
};

export default EditTodo