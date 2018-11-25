import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserMessage from '../UserMessage/UserMessage';
import Registration from '../Registration/Registration';
import {showChat} from '../redux/actions/showChatAction';
import {openLogIn} from '../redux/actions/showLogInAction';
import {openRegistration} from '../redux/actions/showRegistrationAction';
import {connect} from 'react-redux';
import LogIn from '../LogIn/LogIn';
import './Chat.css';

class Chat extends Component {
    state = {

        users: [{
        image: "https://d3iw72m71ie81c.cloudfront.net/female-10.jpg",
        name: "Marry Jain",
        message: 'Anything that can be rendered: numbers, strings, elements or an array or fragment)containing these types.',
        link: 'Your facebook friend',
        id: 324,
    },

    {
        image: "https://d3iw72m71ie81c.cloudfront.net/female-22.jpg",
        name: "Kate Middle",
        message: 'Anything that can be rendered: numbers, strings, elements or an array or fragment)containing these types.',
        link: 'Your facebook friend',
        id: 326,
    },

    {
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        name: "Visual Bro",
        message: 'Anything that can be rendered: numbers, strings, elements or an array or fragment)containing these types.',
        link: 'Your facebook friend',
        id: 320,
    }
 ]
}

    render() {
        return(
            <div className={this.props.showChat ? "showChat" : "hideChat"}>
                <div className='my_avatar_photo'>
                <img className='my_user_img' alt='user_image_js'src='https://images.pexels.com/photos/235516/pexels-photo-235516.jpeg?h=350&auto=compress&cs=tinysrgb'/>
                <span className='my_ava_span'>Hello, friend!</span>
                <i className="fas fa-times" onClick={this.props.showChatHendler}></i>
                {this.props.showRegistrationForm  && !this.props.showLogInForm ? <Registration close={this.props.openRegistration}/> : null}
                {this.props.showLogInForm ? <LogIn close={this.props.openLogIn}/> : null}
                <button onClick={this.props.openLogIn} id='showLogInForm' className='btn_logIn'>Log In</button>
                <button className='registation_button btn_registration' onClick={this.props.openRegistration} id='showRegistrationForm'>Registration</button>
            </div>
                <h3 className='last_comments'>LAST COMMENTS</h3>
                <UserMessage userArray={this.state.users}/>
                </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        showChat: state.openChat,
        showLogInForm: state.showLogInForm,
        showRegistrationForm: state.showRegistrationForm,
    } 
}

function mapDispatchToProps(dispatch){
    return {
        showChatHendler: function() {
            dispatch(showChat());
        },
        openLogIn: function(event) {
            dispatch(openLogIn(event))
        },
        openRegistration: function() {
            dispatch(openRegistration())
        }
    }
}

Chat.propTypes = {
    showChat: PropTypes.bool,
    showLogInForm: PropTypes.bool,
    showRegistrationForm: PropTypes.bool,
    users: PropTypes.array,
    image: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);