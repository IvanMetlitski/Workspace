'use strict'

let personalMovieDB = {
    numberOfFilms: function start() {
        personalMovieDB.count = +prompt('How many films do you watch?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films do you watch?', '');
            console.log(personalMovieDB.count)
        }
    },
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
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
    },
    detectPersonalLevel: function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('To little show')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are usual user')
        } else if (personalMovieDB.count > 30) {
            console.log('You are monster!')
        } else {
            console.log('Great')
        }
    },
    showMyDB: function showMyDB() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB.privat)
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i} ?`, '');
            if (personalMovieDB.genres[i-1] === null || personalMovieDB.genres[i-1] === '') {
                i--;
            } else {
                personalMovieDB.genres.forEach(function () {
                    console.log(`Favourite genre #${i} ${personalMovieDB.genres[i-1]}`)
                })
            }
        }

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true
        } else {
            personalMovieDB.privat = false
        }
    }

};

personalMovieDB.numberOfFilms();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);