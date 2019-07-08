'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.User);
    Product.hasMany(models.Order);
  };
  return Product;
};