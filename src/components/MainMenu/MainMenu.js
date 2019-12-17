/**@format */
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
const MainMenu = () =>{
    return (
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="w-100 menu">
                        <li className="naw-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="naw-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="naw-item">
                            <Link to="/add">Add contact</Link>
                        </li>

                    </ul>

                </nav>

            </div>

        </div>

    );
};
    
export default MainMenu;