'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING
  }, {});
  Order.associate = function (models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Product, {
      through: 'OrdersProducts',
      as: 'products',
      foreignKey: 'orderId'
    });
  };
  return Order;
};