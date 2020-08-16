module.exports = function (sequelize, DataTypes) {
  const businessEvents = sequelize.define('businessEvents', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    booth: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    startTime: DataTypes.TIME,
    endDate: DataTypes.DATEONLY,
    endTime: DataTypes.TIME,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  businessEvents.associate = (models) => {
    businessEvents.hasMany(models.eventDeals, {
      onDelete: 'cascade',
    }),
      businessEvents.belongsTo(models.businesses, {
        onDelete: 'cascade',
      });
    // businessEvents.belongsTo(models.contactTypes, {
    //   onDelete: 'cascade',
    // });
  };

  return businessEvents;
};
