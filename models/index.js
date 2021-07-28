// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: ProductTag,
  foreignKey: 'id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: ProductTag,
  foreignKey: 'id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
};

