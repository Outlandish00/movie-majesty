export const renderMoviesToDOM - (moviesHTML) => {
    const movieList = document.getElementById('movie-list');

    if (movieList){
        movieList.innerHTML = movieHTML;}
    else {
        console.error('Could not find elements with id "movie-list"');
    }
    }
};