import React from "react";
import { NavLink } from "react-router";

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink to={`/`} className={"navbar-brand"}>React-Hooks</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/page1`} className="nav-link">Page-1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page2`} className="nav-link">Page-2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page3`} className="nav-link">Page-3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page4`} className="nav-link">Page-4</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page5`} className="nav-link">Page-5</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page6`} className="nav-link">Page-6</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page7`} className="nav-link">Page-7</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page8`} className="nav-link">Page-8</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/page9`} className="nav-link">Page-9</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu