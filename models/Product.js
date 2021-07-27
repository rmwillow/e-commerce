// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    modelName: 'product',
  }
);

module.exports = Product;
