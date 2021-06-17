module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('Users', {
      username: dataTypes.STRING,
      email: dataTypes.STRING,
      rol: dataTypes.INTEGER,
      password: dataTypes.STRING,
      image: dataTypes.STRING,
     
      
      
  });
  User.associate = function(models) {
      User.hasMany(
          models.Comment,
          {
            as: 'Comment',
            foreignKey: 'userId'
          }
        );
  }
  return User;
}