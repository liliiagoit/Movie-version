import axios from 'axios';

const getTopMovies = (data) => ({
    type: 'SHOW_TOP_MOVIE',
    data,
})

function fetchTopRatedMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=1`)
}

export const getTopRatedMoviesAsync = () => dispatch => {
    fetchTopRatedMovies()
    .then(result => dispatch(getTopMovies(result.data.results)))
    .catch(error => console.log(error))
}