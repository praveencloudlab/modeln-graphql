import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import employeeService from '../services/employeeService';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await employeeService.getEmployees();
      setEmployees(data);
      setLoading(false);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await employeeService.deleteEmployee(id);
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employees</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.designation.title}</td>
              <td>{employee.department.name}</td>
              <td>{employee.manager ? employee.manager.name : 'N/A'}</td>
              <td>
                <Link className="btn btn-primary btn-sm mr-2" style={{margin:5}} to={`/edit-employee/${employee.id}`}>Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
