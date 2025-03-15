import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mx-3">Student Management System</Link>
    </nav>
);

export default Navbar;