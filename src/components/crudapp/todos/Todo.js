import React, { useState, useEffect, useCallback } from "react";
import {  useParams } from "react-router-dom";
import { getTodoServiceById } from "../../../services/TodoService";

const Todo = () => {
    const [todo, setTodo] = useState({
        title: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadTodo();
    }, []);

    const loadTodo = async () => {
        const res = await  getTodoServiceById(id);
        setTodo(res.data);
    };
    return (
        <div className="container py-4">

            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">title: {todo.title}</li>
            </ul>
        </div>
    );
};

export default Todo;