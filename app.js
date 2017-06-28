
const models = require("./models");

/*
models.Movie.create({
  title: "Home Alone 2: Lost in New York",
  release_date: new Date(1997, 5, 12),
  imdb_link: "http://joel.io"
});
*/

models.Movie.findOne({
  where: {
    title: "Jaws"
  }
}).then(function(movie) {
  console.log(movie.release_date);
});
