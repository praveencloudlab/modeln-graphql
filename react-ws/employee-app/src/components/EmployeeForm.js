// src/components/EmployeeForm.js
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import employeeService from '../services/employeeService';

const EmployeeForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const departmentsData = await employeeService.getDepartments();
      const designationsData = await employeeService.getDesignations();
      setDepartments(departmentsData);
      setDesignations(designationsData);

      if (isEditing) {
        const employeeData = await employeeService.getEmployee(parseInt(id));
        const { name, email, designation, department, manager } = employeeData;
        setValue('name', name);
        setValue('email', email);
        setValue('designationId', designation.id);
        setValue('departmentId', department.id);
        setValue('managerId', manager ? manager.id : '');
      }
      setLoading(false);
    };
    fetchData();
  }, [id, isEditing, setValue]);

  const onSubmit = async (formData) => {
    const variables = {
      name: formData.name,
      email: formData.email,
      designationId: parseInt(formData.designationId),
      departmentId: parseInt(formData.departmentId),
      managerId: formData.managerId ? parseInt(formData.managerId) : null,
    };
    if (isEditing) {
      await employeeService.updateEmployee({ id: parseInt(id), ...variables });
    } else {
      await employeeService.addEmployee(variables);
    }
    navigate('/employees');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='row'>
    <div className='col-4'></div>
    <div className="col-12 col-md-4 col-xl-4">
      <h2>{isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" {...register('name', { required: true })} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input className="form-control" {...register('email', { required: true })} />
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <select className="form-control" {...register('designationId', { required: true })}>
            {designations.map((designation) => (
              <option key={designation.id} value={designation.id}>{designation.title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Department:</label>
          <select className="form-control" {...register('departmentId', { required: true })}>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>{department.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Manager ID:</label>
          <input className="form-control" {...register('managerId')} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">{isEditing ? 'Update Employee' : 'Add Employee'}</button>
      </form>
    </div>
    </div>
  );
};

export default EmployeeForm;
