import React from 'react';

const SkillCard = (props) => {
    const {percent} = props;
    const listStyle_1 = 'm-2 bg-slate-300 bg-opacity-60 text-gray-800 px-2 py-1 rounded font-bold';
    const listStyle_2 = 'm-2 bg-blue-200 bg-opacity-60 text-gray-400 px-2 py-1 rounded font-bold';


    return (
        <div className='flex justify-start items-start p-2 m-2'>
            <h2 className='text-3xl font-bold titleFont mainText mr-4 border-b-2 border-b-cyan-600'>Title</h2>
            <ul className='flex flex-wrap '>
                <li className='m-2 bg-slate-300	bg-opacity-60 text-gray-800 px-2 py-1 rounded font-bold'>list-1</li>
                <li className={listStyle_1}>list-2</li>
                <li className={listStyle_1}>list-3</li>
                <li className={listStyle_1}>list-4</li>
                <li className={listStyle_1}>list-4</li>
                <li className={listStyle_2}>list-4</li>
                <li className={listStyle_2}>list-4</li>
                <li className={listStyle_2}>list-4</li>
                <li className={listStyle_2}>list-4</li>
            </ul>
        </div>
    );
};

export default SkillCard;
