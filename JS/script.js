const numberOfFilms = prompt('How many films do you watch?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (i = 0; i < 2; i++) {
    const a = prompt('One of saw film in last?');
    b = prompt('What is your mark?');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Well done');
    } else {
        console.log('Error');
        i--;
    }
}
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


console.log(personalMovieDB);