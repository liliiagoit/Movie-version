import axios from 'axios';
import { useLoading } from '../actions/isLoadingAction';

const getPopularFilms = (data) => ({
    type: 'SHOW_POPULAR_MOVIES',
    data,
})

function fetchPopularGallery () {
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=2')
}

export const popularPlayingAsync = () => dispatch => {
    fetchPopularGallery ()
    .then(result => dispatch(getPopularFilms(result.data.results)))
    .then(data => dispatch(useLoading()))
    .catch(error => console.log(error))
}