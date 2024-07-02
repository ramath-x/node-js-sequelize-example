module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );

  //   User.hasMany(Address);

  return User;
};
