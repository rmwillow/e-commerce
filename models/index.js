// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');

// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {through: "ProductTag"});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {through: "ProductTag"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
};



// //models
// const Product = sequelize.define("Product", {
//   name: {
//     type: DataTypes.INTEGER,
//     unique: true,
//   }
// })

// const Category = sequelize.define("Category", {
//   name: {
//     type: DataTypes.INTEGER,
//     unique: true,
//   }
// })

// const Tag = sequelize.define("Tag", {
//   name: {
//     type: DataTypes.INTEGER,
//     unique: true,
//   }
// })


// const ProductTag = sequelize.define("ProductTag", {
//   name: {
//     type: DataTypes.INTEGER,
//     unique: true,
//   }
// })