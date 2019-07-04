'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: DataTypes.STRING
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
    OrderItem.belongsTo(models.Order);
    OrderItem.belongsTo(models.Product);
  };
  return OrderItem;
};