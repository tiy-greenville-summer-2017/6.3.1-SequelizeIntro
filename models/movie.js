'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    imdb_link: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {

  });
  return Movie;
};
