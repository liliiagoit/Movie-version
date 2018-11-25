import axios from 'axios';

const getFilmCard = (data) => ({
 type: 'SHOW_APPEAR_CARD',
 data,
})

export const clearInput = () => ({
  type: 'CLEAR_INPUT',
})

function fetchAppearFilmCard(id) {
    return  Promise.all([axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS`), 
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US`), 
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US&page=1`)])
    }


export const appearCardFilmAsync = (id) => dispatch => {
    fetchAppearFilmCard(id)
      .then(data => {
        let [info,video, similar] = data;
        let description = info.data;
        let trailers = video.data.results;
        let recommendations = similar.data.results;
        let fullInfo = {
            ...description,
            trailers: trailers,
            recommendations: recommendations,
      }
      dispatch(getFilmCard(fullInfo))
    })
    .then(data => dispatch(clearInput()))
    .catch(error => console.log(error))
      }    
