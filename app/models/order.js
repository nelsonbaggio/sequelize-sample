'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Product, {
      through: 'OrdersProducts',
      as: 'products',
      foreignKey: 'orderId'
    });
  };
  return Order;
};