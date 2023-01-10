import React from 'react';
import {BsFlower1, BsPerson} from "react-icons/bs";

const Logo = () => {
    return (
        <div className='flex flex-col items-center mb-5'>
            <div className='mb-2 rounded-full p-1 avatar avatar-circle border-4 border-white shadow-lg bg-gray-300'>
                <BsPerson className='text-7xl text-white'/>
            </div>
            
        </div>
    );
};

export default Logo;
