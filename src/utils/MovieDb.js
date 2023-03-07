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

export { getPopularMovies,getMovie }