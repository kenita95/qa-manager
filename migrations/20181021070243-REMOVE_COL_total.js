
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.removeColumn('Grn_details', 'total'),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
