import React from 'react';
import {BsBug} from "react-icons/bs";

const IconCircle = (props) => {
    const {icon} = props;
    return (
        <div className='mb-2 rounded-full w-fit h-fit p-2 avatar avatar-circle border-4 border-grey shadow-lg bg-gray-300'>
            <div className='text-3xl text-white'>
                {icon ? icon : <BsBug/>}
            </div>
        </div>
    );
};

export default IconCircle;
