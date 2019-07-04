'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User);
    Order.hasMany(models.OrderItem)
    //nested association
    
  };
  return Order;
};