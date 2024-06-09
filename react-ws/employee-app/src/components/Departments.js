// src/components/Departments.js
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_DEPARTMENTS, DELETE_DEPARTMENT } from '../services/employeeService';

const Departments = () => {
  const { loading, error, data } = useQuery(GET_DEPARTMENTS);
  const [deleteDepartment] = useMutation(DELETE_DEPARTMENT, {
    refetchQueries: [{ query: GET_DEPARTMENTS }],
  });

  const handleDelete = async (id) => {
    try {
      await deleteDepartment({ variables: { id } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Departments</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.departments.map((department) => (
            <tr key={department.id}>
              <td>{department.name}</td>
              <td>
                <Link className="btn btn-primary btn-sm mr-2" to={`/edit-department/${department.id}`}>Edit</Link>
                <button className="btn btn-danger btn-sm" style={{margin:5}} onClick={() => handleDelete(department.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
