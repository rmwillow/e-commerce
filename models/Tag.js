const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
  // define an id column
  id: {
    // use the special Sequelize DataTypes object provide what type of data it is
    type: DataTypes.INTEGER,
    // this is the equivalent of SQL's `NOT NULL` option
    allowNull: false,
    // instruct that this is the Primary Key
    primaryKey: true,
    // turn on auto increment
    autoIncrement: true
  },

  // define an tag_name column
  tag_name: {
    // use the special Sequelize DataTypes object provide what type of data it is
    type: DataTypes.STRING,

  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
