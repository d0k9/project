const numberOfMovies = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
    count: numberOfMovies,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false,
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;

console.log(personalMovieDB);
//создать коммит и запушить на ГитХаб