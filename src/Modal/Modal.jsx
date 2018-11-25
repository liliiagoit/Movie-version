import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';


const Modal = ({close, children, id}) => {
    return(
        <div className='modal'>
        <span className='close' onClick={close} id={id}>x</span>
        {children}
        </div>
    )
}

Modal.propTypes = {
    close: PropTypes.func,
    children: PropTypes.element.isRequired,
    id: PropTypes.number,
}

export default Modal;