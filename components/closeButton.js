import React from 'react';
import {BsXLg} from "react-icons/bs";

const CloseButton = (props) => {
    const {isOpen, onClick} = props;
    return (
        <button onClick={()=> onClick(!isOpen)}>
            <BsXLg className='text-sm text-gray-800'/>
        </button>
    );
};

export default CloseButton;
