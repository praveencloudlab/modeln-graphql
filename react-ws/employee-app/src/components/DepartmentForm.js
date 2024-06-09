// src/components/DepartmentForm.js
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DEPARTMENT, ADD_DEPARTMENT, UPDATE_DEPARTMENT, GET_DEPARTMENTS } from '../services/employeeService';

const DepartmentForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { data } = useQuery(GET_DEPARTMENT, {
    variables: { id: parseInt(id) },
    skip: !isEditing,
  });

  const [addDepartment] = useMutation(ADD_DEPARTMENT, {
    refetchQueries: [{ query: GET_DEPARTMENTS }],
    onCompleted: () => navigate('/departments'),
  });

  const [updateDepartment] = useMutation(UPDATE_DEPARTMENT, {
    refetchQueries: [{ query: GET_DEPARTMENTS }],
    onCompleted: () => navigate('/departments'),
  });

  useEffect(() => {
    if (isEditing && data) {
      setValue('name', data.department.name);
    }
  }, [isEditing, data, setValue]);

  const onSubmit = async (formData) => {
    try {
      if (isEditing) {
        await updateDepartment({ variables: { id: parseInt(id), name: formData.name } });
      } else {
        await addDepartment({ variables: { name: formData.name } });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='row'>
    <div className='col-4'></div>
    <div className="col-12 col-md-4 col-xl-4">
      <h2>{isEditing ? 'Edit Department' : 'Add Department'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" {...register('name', { required: true })} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">{isEditing ? 'Update Department' : 'Add Department'}</button>
      </form>
    </div>
    </div>
  );
};

export default DepartmentForm;
