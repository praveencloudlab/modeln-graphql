// src/components/DesignationForm.js
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DESIGNATION, ADD_DESIGNATION, UPDATE_DESIGNATION, GET_DESIGNATIONS } from '../services/employeeService';

const DesignationForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { data } = useQuery(GET_DESIGNATION, {
    variables: { id: parseInt(id) },
    skip: !isEditing,
  });

  const [addDesignation, { error: addError }] = useMutation(ADD_DESIGNATION, {
    refetchQueries: [{ query: GET_DESIGNATIONS }],
    onCompleted: () => navigate('/designations'),
  });

  const [updateDesignation, { error: updateError }] = useMutation(UPDATE_DESIGNATION, {
    refetchQueries: [{ query: GET_DESIGNATIONS }],
    onCompleted: () => navigate('/designations'),
  });

  useEffect(() => {
    if (isEditing && data) {
      setValue('title', data.designation.title);
    }
  }, [isEditing, data, setValue]);

  const onSubmit = async (formData) => {
    try {
      if (isEditing) {
        await updateDesignation({ variables: { id: parseInt(id), title: formData.title } });
      } else {
        await addDesignation({ variables: { title: formData.title } });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='row'>
    <div className='col-4'></div>
    <div className="col-12 col-md-4 col-xl-4">
      <h2>{isEditing ? 'Edit Designation' : 'Add Designation'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Title:</label>
          <input className="form-control" {...register('title', { required: true })} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">{isEditing ? 'Update Designation' : 'Add Designation'}</button>
      </form>
      {addError && <p>Error adding designation: {addError.message}</p>}
      {updateError && <p>Error updating designation: {updateError.message}</p>}
    </div>
    </div>
  );
};

export default DesignationForm;
