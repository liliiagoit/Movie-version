import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import './LogIn.css';

const LogIn = ({close, id}) => {
    return(
        <Modal close={close} id={id}>
       <form>
           <input type='login' placeholder='login' className='input_email'/>
           <input type='email' placeholder='email' className='input_email'/>
           <input type='password' placeholder='password' className='input_password'/>
           <input type='submit' value='Loge in' className='input_submit'/>
       </form>
        </Modal>
    )
}

LogIn.propTypes = {
    close: PropTypes.func,
    id: PropTypes.number,
}

export default LogIn;