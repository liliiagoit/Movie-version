import axios from 'axios';

const addToWishList = (arr) => ({
    type: 'ADD_TO_WISHLIST',
    arr,
});

export const deleteFromWishList = (event) => ({
    type: 'DELETE_FROM_WISH_LIST',
    id:  event.target.dataset.movieid,
});

export const openWishList = () => ({
    type: 'COMPONENT_DID_MOUNT',
});


function fetchAddToWishList(event) {
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5dc8f1bd53095bb93dfec84bda8afa57&language=ru-rus`)
}


export const showWishListAsync = (event) => dispatch => {
    fetchAddToWishList(event)
    .then(response => {
        let result = JSON.parse(localStorage.getItem('wishlist'));
        if (result) {
          result.map(el => el.id).includes(response.data.id) ? null : result.push(response.data);
        } else {
          result = [];
          result.push(response.data);
        }
        localStorage.setItem('wishlist', JSON.stringify(result));
      dispatch(addToWishList(result))
    })
    .catch(error => console.log(error))
}