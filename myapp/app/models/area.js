'use strict';
module.exports = (sequelize, DataTypes) => {
  const area = sequelize.define('area', {
    nome: DataTypes.STRING
  }, {
    underscored: true,
    tablename: 'areas'
  });
  area.associate = function(models) {
    //area.hasMany(models.curso);
  };
  return area;
};