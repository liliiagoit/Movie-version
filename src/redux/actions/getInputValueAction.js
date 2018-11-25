import axios from 'axios';

export const getSimilarWords = result => ({
    type: 'GET_INFO',
    result,
})

function fetchGetSimilarWords(value) {
    return axios.get (`https://api.themoviedb.org/3/search/movie?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&query=${value}&page=1&include_adult=true`)
}

export const getInputValueFetchAsync = (value) => dispatch => {
    fetchGetSimilarWords(value)
    .then(result => dispatch(getSimilarWords(result.data.results)))
    .catch(error => console.log(error))
}