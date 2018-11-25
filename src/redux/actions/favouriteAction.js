import axios from 'axios';

const addToFavouriteList = (arr) => ({
    type: 'ADD_TO_FAVOURITE',
    arr,
})

export const deleteFromFavouriteList = (event) => ({
    type: 'DELETE_FROM_FAVOURITE',
    id: event.target.dataset.movieid,
})

export const getFavouriteList = () => ({
        type: 'GET_FAVOURITE'
})


function fetchAddToFavouriteList(event) {
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5dc8f1bd53095bb93dfec84bda8afa57&language=ru-rus`)
}

export const showFavouriteListAsync = (event) => dispatch => {
    fetchAddToFavouriteList(event)
    .then(data => {
        let result = JSON.parse(localStorage.getItem('favourite'));
        if (result) {
          result.map(el => el.id).includes(data.data.id) ? null : result.push(data.data);
        } else {
          result = [];
          result.push(data.data);
        }
        localStorage.setItem('favourite', JSON.stringify(result));
        dispatch(addToFavouriteList(result))
      })
    .catch(error => console.log(error))
}