import React from 'react';
import Link from "next/link";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const PagePathBtn = (props) => {
    const { data, workType, asPath} = props;
    const list = data ? data : [{path:'/', name:'home'}, {path:'/work', name:'work'}, {path: asPath, name:workType}]
    return (
        <ul className='flex items-center p-2'>
            {list?.map((item, i)=>
            <li className='flex items-center' key={i}>
                {i === 0
                    ? null
                    :
                    <span className='mx-4 text-md text-gray-400'>
                        <MdOutlineKeyboardArrowRight/>
                    </span>}
                <Link href={item.path}>
                    <span className={i !== list.length-1 ? 'text-blue-500' : 'text-gray-500'}>{item.name}</span>
                </Link>
            </li>
            )}
        </ul>
    );
};

export default PagePathBtn;