'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
    
  }, {});
  //how add field in table
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Order);
  };
  return User;
};