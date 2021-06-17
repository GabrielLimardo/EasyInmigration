"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    CountriesId: DataTypes.INTEGER,
  });

  Item.associate = function (models) {
    Item.belongsTo(models.Users, {
      as: "user",
      foreignKey: "userId",
    });

    Item.belongsTo(models.Countries, {
      as: "Countries",
      foreignKey: "CountriesId",
    });

   
  };
  return Item;
};
