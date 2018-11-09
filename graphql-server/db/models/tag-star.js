'use strict'
module.exports = (sequelize, DataTypes) => {

  const TagStar = sequelize.define('TagStar', {
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
    createdAt: DataTypes.DATE,
  })

  return TagStar
}
