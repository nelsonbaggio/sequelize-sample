'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.Order, {
      through: 'OrdersProducts',
      as: 'orders',
      foreignKey: 'productId'
    });
  };
  return Product;
};