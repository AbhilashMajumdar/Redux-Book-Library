import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to={'/'}>Book Library</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/addbook'}>Add Book</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/viewallbooks'}>View Books</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/searchbook'}>Search Book</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/recommendbook'}>Recommended Books</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar