var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Dark Knight", year: "2008", length: 185, rating: "9.1", genre: "sci-fi" },
  { title: "The Matrix Reloaded", year: "2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  //add code
  return movieList[index].title;
}

console.log(getMovieTitle(3));
console.log(getMovieTitle(0));



function addMovie( movie ){
  //add code
  movieList.push(movie);
  return movieList;
}

var newMovie = { title: "Iron Man", year: "2008", length: 138, rating: "7.9", genre: "sci-fi" };
console.log(addMovie(newMovie));



function movieByRating(){
  //add code
 movieList.sort(function(a, b){
  return b.rating - a.rating;
 });

 return movieList;
}

console.log(movieByRating());




function findByTitle( title ){
  //add code
  var searchMovie = [];

  movieList.map(function(movie){
    if(movie.title.toLowerCase().includes(title)){
       searchMovie.push(movie);
    }
  });

  return searchMovie;
}

console.log(findByTitle("matrix"));
