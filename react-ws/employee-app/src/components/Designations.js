// src/components/Designations.js
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_DESIGNATIONS, DELETE_DESIGNATION } from '../services/employeeService';

const Designations = () => {
  const { loading, error, data } = useQuery(GET_DESIGNATIONS);
  const [deleteDesignation] = useMutation(DELETE_DESIGNATION, {
    refetchQueries: [{ query: GET_DESIGNATIONS }],
  });

  const handleDelete = async (id) => {
    try {
      await deleteDesignation({ variables: { id } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Designations</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.designations.map((designation) => (
            <tr key={designation.id}>
              <td>{designation.title}</td>
              <td>
                <Link className="btn btn-primary btn-sm mr-2" to={`/edit-designation/${designation.id}`}>Edit</Link>
                <button className="btn btn-danger btn-sm" style={{margin:5}} onClick={() => handleDelete(designation.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Designations;
