'use strict';
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('curso', {
    sigla: {
      tyep: DataTypes.STRING,
      allowNull: false
    },
    nome: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args:[40,50],
          msg: "O nome do curso precisa ter entre 4 e 50 caracteres."
        }
      }
    },
    descricao: DataTypes.TEXT,
    id_area: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  curso.associate = function(models) {
    // associations can be defined here
  };
  return curso;
};