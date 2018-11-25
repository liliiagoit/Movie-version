import React from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import './Registration.css';

const Registration = ({close, id}) => {
    return(
        <Modal close={close} id={id}>
       <form>
           <input type='login' placeholder='login' className='input_email'/>
           <input type='email' placeholder='email' className='input_email'/>
           <input type='password' placeholder='password' className='input_password'/>
           <input type='password' placeholder='password' className='input_password'/>
           <input type='submit' value='Save' className='input_submit'/>
       </form>
        </Modal>
    )
}

Registration.propTypes = {
    close: PropTypes.func,
    id: PropTypes.number,
}

export default Registration;