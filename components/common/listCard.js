import React from 'react';
import {CiBookmark, TbBookmark} from "react-icons/all";

const ListCard = (props) => {
    // const {data} = props;
    const data = [
        {text: 'Lorem ipsum dolor sit amet.'},
        {text: 'adipisicing elit. Dolorem '},
        {text: 'dolores eum eveniet ex excepturi incidunt.'}
    ]
    return (
        <ul className='m-1'>
            {data?.map((item,i)=>
                <li key={i} className='flex items-start mx-1 my-2'>
                    <span className='m-1'><TbBookmark/></span>
                    <span>{item?.text}</span>
                </li>
            )}
        </ul>
    );
};

export default ListCard;