let numberOfFilms =+ prompt("Nechta kino ko'rgansiz")
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
console.log(personalMovieDB);

for(let i = 0; i < 2; i++){
    let birinchiS = prompt("Yoqtirgan kinoyingizni yozing", ' ');
    let ikkinchiS = prompt("U kinoni baxolang", ' ');

    if(birinchiS == null || ikkinchiS == null || birinchiS == "" || ikkinchiS == ""){
        i--
    } else {
        personalMovieDB.movies[birinchiS] = ikkinchiS
    }
}
