const { Department, Designation, Employee } = require('../models');

const resolvers = {
  Query: {
    departments: async () => await Department.findAll(),
    department: async (_, { id }) => await Department.findByPk(id),
    designations: async () => await Designation.findAll(),
    designation: async (_, { id }) => await Designation.findByPk(id),
    employees: async () => await Employee.findAll({
      include: [
        { model: Designation },
        { model: Department },
        { model: Employee, as: 'Manager' },
        { model: Employee, as: 'Subordinates' }
      ]
    }),
    employee: async (_, { id }) => await Employee.findByPk(id, {
      include: [
        { model: Designation },
        { model: Department },
        { model: Employee, as: 'Manager' },
        { model: Employee, as: 'Subordinates' }
      ]
    })
  },
  Mutation: {
    addDepartment: async (_, { name }) => await Department.create({ name }),
    updateDepartment: async (_, { id, name }) => {
      const department = await Department.findByPk(id);
      department.name = name;
      await department.save();
      return department;
    },
    deleteDepartment: async (_, { id }) => {
      const department = await Department.findByPk(id);
      await department.destroy();
      return department;
    },
    addDesignation: async (_, { title }) => await Designation.create({ title }),  // Pass the title argument here
    updateDesignation: async (_, { id, title }) => {
      const designation = await Designation.findByPk(id);
      designation.title = title;
      await designation.save();
      return designation;
    },
    deleteDesignation: async (_, { id }) => {
      const designation = await Designation.findByPk(id);
      await designation.destroy();
      return designation;
    },
    addEmployee: async (_, { name, email, designationId, departmentId, managerId }) => await Employee.create({
      name,
      email,
      designation_id: designationId,
      department_id: departmentId,
      manager_id: managerId
    }),
    updateEmployee: async (_, { id, name, email, designationId, departmentId, managerId }) => {
      const employee = await Employee.findByPk(id);
      employee.name = name;
      employee.email = email;
      employee.designation_id = designationId;
      employee.department_id = departmentId;
      employee.manager_id = managerId;
      await employee.save();
      return employee;
    },
    deleteEmployee: async (_, { id }) => {
      const employee = await Employee.findByPk(id);
      await employee.destroy();
      return employee;
    }
  },
  Employee: {
    designation: async (employee) => await Designation.findByPk(employee.designation_id),
    department: async (employee) => await Department.findByPk(employee.department_id),
    manager: async (employee) => await Employee.findByPk(employee.manager_id),
    subordinates: async (employee) => await Employee.findAll({ where: { manager_id: employee.id } })
  }
};

module.exports = resolvers;
