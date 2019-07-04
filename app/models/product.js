'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};