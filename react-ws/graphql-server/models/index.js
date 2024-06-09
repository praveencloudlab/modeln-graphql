const Sequelize = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Department = require('./department')(sequelize, Sequelize);
db.Designation = require('./designation')(sequelize, Sequelize);
db.Employee = require('./employee')(sequelize, Sequelize);

// Define associations
db.Department.hasMany(db.Employee, { foreignKey: 'department_id' });
db.Employee.belongsTo(db.Department, { foreignKey: 'department_id' });

db.Designation.hasMany(db.Employee, { foreignKey: 'designation_id' });
db.Employee.belongsTo(db.Designation, { foreignKey: 'designation_id' });

db.Employee.belongsTo(db.Employee, { as: 'Manager', foreignKey: 'manager_id' });
db.Employee.hasMany(db.Employee, { as: 'Subordinates', foreignKey: 'manager_id' });

module.exports = db;
