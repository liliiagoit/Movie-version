import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

const UserCard = ({name, message, link, image}) => {
    return (
    <div className='chat_div'>
    <img className='user_image_avatar' src={image} alt='avatar_picture'/>
    <span className='user_span'>{name}</span>
    <p className='user_message'>{message}</p>
   <a className='fb_link'>{link}</a> 
   </div>
    )  
};

UserCard.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
}

export default UserCard;