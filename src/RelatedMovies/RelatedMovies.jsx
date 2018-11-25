import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './RelatedMovies.css';

const RelatedMovies = ({poster, id}) => {
    return (
    <div className='film_img_list'>
     <NavLink to={`/cardfilm/${id}`}>
     <img className='recommend' alt='film_img' src={`https://image.tmdb.org/t/p/w300${poster}` ? `https://image.tmdb.org/t/p/w300${poster}` : `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`}/>  
     </NavLink>
    </div>    
    )
}

RelatedMovies.propTypes = {
    poster: PropTypes.string,
    id: PropTypes.number,
}

export default RelatedMovies;