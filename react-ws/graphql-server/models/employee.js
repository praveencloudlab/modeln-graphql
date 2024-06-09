/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    designation_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'designations',
        key: 'id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'departments',
        key: 'id'
      }
    },
    manager_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employees',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
