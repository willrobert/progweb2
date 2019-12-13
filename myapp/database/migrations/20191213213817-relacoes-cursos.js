'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('cursos', ['id_area'], {
      type: 'foreign key',
      name: 'cursos_id_area_fk',
      references: {
        table: 'areas',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'cursos',
      'cursos_id_area_fk'
    );
  }
};
