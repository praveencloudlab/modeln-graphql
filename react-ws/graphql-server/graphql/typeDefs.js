const { gql } = require('apollo-server');

const typeDefs = gql`
  type Department {
    id: Int!
    name: String!
  }

  type Designation {
    id: Int!
    title: String!
  }

  type Employee {
    id: Int!
    name: String!
    email: String!
    designation: Designation
    department: Department
    manager: Employee
    subordinates: [Employee]
  }

  type Query {
    departments: [Department]
    department(id: Int!): Department
    designations: [Designation]
    designation(id: Int!): Designation
    employees: [Employee]
    employee(id: Int!): Employee
    searchEmployeesByName(name: String!): [Employee] #customised query/function  
    countEmployees: Int  # aggregate function
    getEmployeesByDepartmentAndDesignation(departmentName: String!, designationTitle: String!): [Employee]

  }

  
  type Mutation {
    addDepartment(name: String!): Department
    updateDepartment(id: Int!, name: String!): Department
    deleteDepartment(id: Int!): Department
    addDesignation(title: String!): Designation
    updateDesignation(id: Int!, title: String!): Designation
    deleteDesignation(id: Int!): Designation
    addEmployee(name: String!, email: String!, designationId: Int!, departmentId: Int!, managerId: Int): Employee
    updateEmployee(id: Int!, name: String!, email: String!, designationId: Int!, departmentId: Int!, managerId: Int): Employee
    deleteEmployee(id: Int!): Employee
  }
`;

module.exports = typeDefs;
