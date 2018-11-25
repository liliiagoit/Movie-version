import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './CardHover.css';

const CardHover = ({id, addToFavourite, addToWishList}) => {
    return(
        <div className='div_appear_hover'>
        <div className='cover-button'>
        <button className='button_icon'><i className="far fa-heart hover_icon" data-movieid={id} onClick={addToFavourite} title='add to favourite'></i></button>
        <button className='button_icon'><i className="fas fa-th-list hover_icon" data-movieid={id} onClick={addToWishList} title='add to wishlist'></i></button>
        <button className='button_icon'><i className="fab fa-rocketchat hover_icon" title='go to chat'></i></button>
        <button className='button_icon'><NavLink to={`/cardfilm/${id}`}><i className="far fa-caret-square-right hover_icon" title='go to movie'></i></NavLink></button>
        </div>
        </div>
    )
};

CardHover.propTypes = {
    id: PropTypes.number,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
}

export default CardHover;