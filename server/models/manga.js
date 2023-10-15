module.exports = (sequelize, DataTypes) => {
  const Manga = sequelize.define("Manga", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: DataTypes.STRING,
    // ... d'autres champs
  });

  return Manga;
};
