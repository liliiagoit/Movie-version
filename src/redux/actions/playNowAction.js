import axios from 'axios';
import { useLoading } from '../actions/isLoadingAction';

const getFilms = (data) => ({
    type: 'SHOW_NOW_PLAYING',
    data,
})

function fetchGalleryMovies () {
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=1&region=UA')
}

export const nowPlayingAsync = () => dispatch => {
    fetchGalleryMovies ()
    .then(result => dispatch(getFilms(result.data.results)))
    .then(data => dispatch(useLoading()))
    .catch(error => console.log(error))
}