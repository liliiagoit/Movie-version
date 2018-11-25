import React from 'react';
import PropTypes from 'prop-types'; 
import CardHover from '../CardHover/CardHover';
import './CardFilm.css';

const CardFilm = ({imgFilm, id, addToFavourite, addToWishList}) => {
    return(
        <div className='card_film'>
        <img className='card_img' alt='card_picture' src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}`: `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`}/>
        <CardHover id={id} addToFavourite={addToFavourite} addToWishList={addToWishList}/>
        </div>
    )
};

CardFilm.propTypes = {
    imgFilm: PropTypes.string,
    id: PropTypes.number,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
}

export default CardFilm;