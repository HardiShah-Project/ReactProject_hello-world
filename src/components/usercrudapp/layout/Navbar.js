import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navcolor">
            <div className="container">
                <Link className="navbar-brand" to=""><img className="img-center" height="80" width="80" src="../images.png"/></Link>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
        </nav>
    );
};
export default Navbar;