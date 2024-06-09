// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Employees from './components/Employees';
import EmployeeForm from './components/EmployeeForm';
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm';
import Designations from './components/Designations';
import DesignationForm from './components/DesignationForm';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome to GraphQL Client</div>} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/add-employee" element={<EmployeeForm />} />
      <Route path="/edit-employee/:id" element={<EmployeeForm />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/add-department" element={<DepartmentForm />} />
      <Route path="/edit-department/:id" element={<DepartmentForm />} />
      <Route path="/designations" element={<Designations />} />
      <Route path="/add-designation" element={<DesignationForm />} />
      <Route path="/edit-designation/:id" element={<DesignationForm />} />
    </Routes>
  );
}

export default AppRoutes;
