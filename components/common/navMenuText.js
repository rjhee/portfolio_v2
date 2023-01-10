import React from 'react';
import {HiChevronDown} from "react-icons/hi";

const NavMenuText = (props) => {
    const {icon, text} = props;
    return (
        <button className='flex items-center justify-between p-2 w-full rounded-md mb-2 text-zinc-600'>
            <div className='flex items-center'>
                <div className='text-xl mb-1'>{icon}</div>
                <span className='mx-3 text-lg font-bold'>{text}</span>
            </div>
            <span className='mx-3 text-md font-bold'><HiChevronDown/></span>
        </button>
    );
};

export default NavMenuText;
