const numberOfFilms = prompt('How many films do you watch?','');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false,
};

const whatLastFilm = prompt('One of saw film in last?');
const whatIsYourMark = prompt('What is your mark?');


personalMovieDB.movies[whatLastFilm] = whatLastFilm;
personalMovieDB.movies[whatIsYourMark] = whatIsYourMark;

console.log(personalMovieDB);