import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './TopRated.css';

const TopRated = ({imgFilm, title, vote_average, id}) => {
    return(
        <div className='top_rated_movies'>
         <NavLink to={`/cardfilm/${id}`}>
            <img className='top_rated_images' src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}`: `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`} alt='top_pic'/>
            </NavLink>
            <h5 className='title_top_rated'>{title}</h5>
            <i className="fas fa-star-half-alt"></i>
            <h5 className='title_top_popularity'>{vote_average}</h5>
        </div>
    )
}

TopRated.propTypes = {
    imgFilm: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.number,
}

export default TopRated;