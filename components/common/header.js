import React from 'react';
import {HiOutlineMenu} from "react-icons/hi";

const Header = (props) => {
    const { onClick } = props;
    return (
        <header className='flex sticky top-0 left-0 items-center px-4 w-full h-14 bg-white drop-shadow-md'>
            <button
                className='text-2xl text-zinc-600'
                onClick={onClick}>
                <HiOutlineMenu/>
            </button>
        </header>
    );
};

export default Header;
