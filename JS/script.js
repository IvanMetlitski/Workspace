let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How many films do you watch?', '');

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you watch?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms () {
    for (i = 0; i < 2; i++) {
        const a = prompt('One of saw film in last?');
        const b = prompt('What is your mark?');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Well done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('To little show')
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are usual user')
    }
    else if (personalMovieDB.count > 30) {
        console.log('You are monster!')
    }
    else {
        console.log('Oyoyoyoyoy')
    }
}

function showMyDB () {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB.privat)
    }
}

let writeYourGenres = function () {
    for (i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favourite genre number ${i} ?`, '');
    }
}

showMyDB();

detectPersonalLevel();

writeYourGenres();

console.log(personalMovieDB);