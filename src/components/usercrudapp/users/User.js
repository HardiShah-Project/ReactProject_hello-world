import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserServiceById } from "../../../services/UserService";

const User = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        await getUserServiceById(id)
            .then(res => setUser(res.data))
            .catch(err => {
                history.push("/NotFound");
            })
    };

    return (
        <div className="container py-4">
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">FirstName: {user.firstname}</li>
                <li className="list-group-item">LastName: {user.lastname}</li>
                <li className="list-group-item">UserName: {user.username}</li>
                <li className="list-group-item">Password: {user.password}</li>
                <li className="list-group-item">ConfirmPassword: {user.confirmPassword}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">PhoneNo.: {user.phone}</li>
            </ul>
        </div>
    );
};

export default User;