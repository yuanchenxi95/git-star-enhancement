'use strict'
module.exports = (sequelize, DataTypes) => {

  const Tag = sequelize.define('Tag', {
    // uuid: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   primaryKey: true,
    // },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tagName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })

  Tag.associate = function(models) {
    models.Tag.belongsToMany(models.Star, { through: models.TagStar })
  }

  return Tag
}
