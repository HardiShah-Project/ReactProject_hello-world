import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodoService,deleteTodoServiceById } from "../../../services/TodoService";

const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        const result = await getTodoService()
        setTodos(result.data.reverse());

    };
    const deleteTodo = async id => {
        await deleteTodoServiceById(id)
        loadTodos();
    }
    function completeTodo(index) {
        todos[index].completed = !todos[index].completed;
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Todo List</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {todos.map((todo, index) => (
                            <tr key={todo.id}>
                                <th scope="row">{index + 1}</th>
                                <td style={{ textDecoration: todo.completed ? 'line-through' : "" }}>{todo.title}</td>
                                <td>
                                    <Link className="btn fa fa-eye  btn-primary mr-2" to={`/todos/${todo.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/todos/edit/${todo.id}`}> Edit</Link>
                                    <Link className="btn  btn-danger mr-2" to="" onClick={() => deleteTodo(todo.id)}> Delete</Link>
                                    <Link className="btn  btn-outline-primary" to="" onClick={() => completeTodo(index)}>Complete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;
