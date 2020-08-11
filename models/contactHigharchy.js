module.exports = function (sequelize, DataTypes) {
  const contactHigharchy = sequelize.define('contactHigharchy', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    xplot: DataTypes.INTEGER,
    yplot: DataTypes.INTEGER,
    groupName: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return contactHigharchy;
};
