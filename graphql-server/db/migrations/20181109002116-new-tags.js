'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Stars', [
      {
        username: 'yuanchenxi95',
        github_repository: 'axios/axios',
      },
      {
        username: 'yuanchenxi1',
        github_repository: 'axios/axios',
      },
      {
        username: 'yuanchenxi1',
        github_repository: 'axios/axios',
      },
    ])

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
