import axios from 'axios';
import { useLoading } from '../actions/isLoadingAction';


const getSoonMovie = (data) => ({
    type: 'SHOW_SOON_PLAYING',
    data,
})

function getSoonMovieGallery() {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=2')
}


export const soonPlayingAsync = () => dispatch => {
    getSoonMovieGallery()
    .then(result => dispatch(getSoonMovie(result.data.results)))
    .then(data => dispatch(useLoading()))
    .catch(error => console.log(error))
}
