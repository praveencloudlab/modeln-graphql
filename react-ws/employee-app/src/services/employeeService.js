// src/services/employeeService.js
import { gql } from '@apollo/client';
import client from '../apolloClient'; // Import the Apollo Client instance

// Employee Queries and Mutations
export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      name
      email
      designation {
        title
      }
      department {
        name
      }
      manager {
        name
      }
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GetEmployee($id: Int!) {
    employee(id: $id) {
      id
      name
      email
      designation {
        id
        title
      }
      department {
        id
        name
      }
      manager {
        id
        name
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation AddEmployee($name: String!, $email: String!, $designationId: Int!, $departmentId: Int!, $managerId: Int) {
    addEmployee(name: $name, email: $email, designationId: $designationId, departmentId: $departmentId, managerId: $managerId) {
      id
      name
      email
      designation {
        title
      }
      department {
        name
      }
      manager {
        name
      }
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: Int!, $name: String!, $email: String!, $designationId: Int!, $departmentId: Int!, $managerId: Int) {
    updateEmployee(id: $id, name: $name, email: $email, designationId: $designationId, departmentId: $departmentId, managerId: $managerId) {
      id
      name
      email
      designation {
        title
      }
      department {
        name
      }
      manager {
        name
      }
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: Int!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;

// Department Queries and Mutations
export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      id
      name
    }
  }
`;

export const GET_DEPARTMENT = gql`
  query GetDepartment($id: Int!) {
    department(id: $id) {
      id
      name
    }
  }
`;

export const ADD_DEPARTMENT = gql`
  mutation AddDepartment($name: String!) {
    addDepartment(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_DEPARTMENT = gql`
  mutation UpdateDepartment($id: Int!, $name: String!) {
    updateDepartment(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($id: Int!) {
    deleteDepartment(id: $id) {
      id
    }
  }
`;

// Designation Queries and Mutations
export const GET_DESIGNATIONS = gql`
  query GetDesignations {
    designations {
      id
      title
    }
  }
`;

export const GET_DESIGNATION = gql`
  query GetDesignation($id: Int!) {
    designation(id: $id) {
      id
      title
    }
  }
`;

export const ADD_DESIGNATION = gql`
  mutation AddDesignation($title: String!) {
    addDesignation(title: $title) {
      id
      title
    }
  }
`;

export const UPDATE_DESIGNATION = gql`
  mutation UpdateDesignation($id: Int!, $title: String!) {
    updateDesignation(id: $id, title: $title) {
      id
      title
    }
  }
`;

export const DELETE_DESIGNATION = gql`
  mutation DeleteDesignation($id: Int!) {
    deleteDesignation(id: $id) {
      id
    }
  }
`;

const employeeService = {
  // Employee services
  getEmployees: async () => {
    const response = await client.query({ query: GET_EMPLOYEES });
    return response.data.employees;
  },
  getEmployee: async (id) => {
    const response = await client.query({ query: GET_EMPLOYEE, variables: { id } });
    return response.data.employee;
  },
  addEmployee: async (employee) => {
    const response = await client.mutate({ mutation: ADD_EMPLOYEE, variables: employee });
    return response.data.addEmployee;
  },
  updateEmployee: async (employee) => {
    const response = await client.mutate({ mutation: UPDATE_EMPLOYEE, variables: employee });
    return response.data.updateEmployee;
  },
  deleteEmployee: async (id) => {
    const response = await client.mutate({ mutation: DELETE_EMPLOYEE, variables: { id } });
    return response.data.deleteEmployee;
  },

  // Department services
  getDepartments: async () => {
    const response = await client.query({ query: GET_DEPARTMENTS });
    return response.data.departments;
  },
  getDepartment: async (id) => {
    const response = await client.query({ query: GET_DEPARTMENT, variables: { id } });
    return response.data.department;
  },
  addDepartment: async (department) => {
    const response = await client.mutate({ mutation: ADD_DEPARTMENT, variables: department });
    return response.data.addDepartment;
  },
  updateDepartment: async (department) => {
    const response = await client.mutate({ mutation: UPDATE_DEPARTMENT, variables: department });
    return response.data.updateDepartment;
  },
  deleteDepartment: async (id) => {
    const response = await client.mutate({ mutation: DELETE_DEPARTMENT, variables: { id } });
    return response.data.deleteDepartment;
  },

  // Designation services
  getDesignations: async () => {
    const response = await client.query({ query: GET_DESIGNATIONS });
    return response.data.designations;
  },
  getDesignation: async (id) => {
    const response = await client.query({ query: GET_DESIGNATION, variables: { id } });
    return response.data.designation;
  },
  addDesignation: async (designation) => {
    const response = await client.mutate({ mutation: ADD_DESIGNATION, variables: designation });
    return response.data.addDesignation;
  },
  updateDesignation: async (designation) => {
    const response = await client.mutate({ mutation: UPDATE_DESIGNATION, variables: designation });
    return response.data.updateDesignation;
  },
  deleteDesignation: async (id) => {
    const response = await client.mutate({ mutation: DELETE_DESIGNATION, variables: { id } });
    return response.data.deleteDesignation;
  },
};

export default employeeService;
