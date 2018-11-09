'use strict'
module.exports = (sequelize, DataTypes) => {

  const Star = sequelize.define('Star', {
    // uuid: {
    //   allowNull: false,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   primaryKey: true,
    // },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex' },
    githubRepository: { type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex' },
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })

  Star.associate = function(models) {
    models.Star.belongsToMany(models.Tag, { through: models.TagStar })
  };

  return Star
}
