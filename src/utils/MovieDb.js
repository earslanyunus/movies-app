const API_URL = 'https://api.themoviedb.org/3';
const getPopularMovies = async () => {
    const url = `${API_URL}/movie/popular?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    return await response.json();
}
const getMovie = async (id) => {
    const url = `${API_URL}/movie/${id}?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&language=en-US`;
    const response = await fetch(url);
    return await response.json();
}
const getMovieCredits = async (id) => {
    const url = `${API_URL}/movie/${id}/credits?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&language=en-US`;
    const response = await fetch(url);
    return await response.json();
}
//combine detail and credits
const getMovieDetail = async (id) => {
    const movie = await getMovie(id);
    const credits = await getMovieCredits(id);
    credits.cast.sort((a, b) => b.popularity - a.popularity)
    credits.cast = credits.cast.slice(0, 20)
    return {
        ...movie,
        ...credits
    }
}
const getSimilarMovies = async (id) => {
    const url = `${API_URL}/movie/${id}/similar?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const data =  await response.json();
    return data.results
}

export { getPopularMovies,getMovie,getMovieDetail,getSimilarMovies }