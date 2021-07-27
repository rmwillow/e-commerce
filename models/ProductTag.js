const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
  // define an product_name column
  product_name: {
    // use the special Sequelize DataTypes object provide what type of data it is
    type: DataTypes.STRING,
    // this is the equivalent of SQL's `NOT NULL` option
    allowNull: false,
  },

  // define an price column
  price: {
    // use the special Sequelize DataTypes object provide what type of data it is
    type: DataTypes.DECIMAL,
    // this is the equivalent of SQL's `NOT NULL` option
    allowNull: false,
    // instruct that this is the Primary Key
    isDecimal: true
  },

  // define an STOCK column
  stock: {
    // use the special Sequelize DataTypes object provide what type of data it is
    type: DataTypes.INTEGER,
    // this is the equivalent of SQL's `NOT NULL` option
    allowNull: false,
    // instruct that this is the Primary Key
    defaultValue: "10",
    // validates numeric value
    isNumeric: true,
    references: {
      model: 'category',
      key: 'id'
    }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
