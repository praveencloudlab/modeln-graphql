import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Employee Management</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees">Employees</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-employee">Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/departments">Departments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-department">Add Department</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/designations">Designations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-designation">Add Designation</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
