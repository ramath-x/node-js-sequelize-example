module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define(
    "addresses",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {}
  );

  //   Address.belongsTo(User);

  return Address;
};
