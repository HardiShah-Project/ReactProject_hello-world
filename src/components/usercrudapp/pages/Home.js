import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserService, deleteUserServiceById } from "../../../services/UserService";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await getUserService()
        setUsers(result.data.reverse());

    };
    const deleteUser = async id => {
        await deleteUserServiceById(id)
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1 className="heading">User List</h1>
                <table className="table table-striped border shadow">
                    <thead className=" tblcolor">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FullName</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNo.</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{`${user.firstname}${user.lastname}`}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link className="btn fa fa-eye  btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}> Edit</Link>
                                    <Link className="btn  btn-danger mr-2" to="" onClick={() => deleteUser(user.id)}> Delete</Link>
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
