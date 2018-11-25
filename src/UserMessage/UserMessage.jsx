import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard/UserCard';
import './UserMessage.css';

const UserMessage = ({userArray}) => {
    return (
        <div>
        {userArray.map(el => <UserCard image={el.image} name={el.name} message={el.message} link={el.link} key={el.id}/>)}
        </div>
    )
};

UserMessage.propTypes ={
    userArray: PropTypes.array,
}

export default UserMessage;
