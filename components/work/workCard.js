import React from 'react';
import Image from "next/image";

const WorkCard = (props) => {
    const {img, title, contents} = props;
    return (
        <div className=' flex flex-col justify-between drop-shadow-lg rounded-md bg-white
                    m-2 hover:drop-shadow-2xl cursor-pointer transition-shadow
                    md:flex-col justify-center items-center '>
            <div className='w-full h-32 mb-1'>
                {img
                    ?
                    <Image
                        src={img}
                        alt='project image'
                        width={100}
                        height={100}
                        className='mb-2'/>
                    : <div className='bg-blue-100 w-full h-full rounded-t-md'/>
                }
            </div>

            <div className='p-3'>
                <h2 className='mb-2 font-bold text-2xl titleFont'>{title}</h2>
                <p className='text-gray-600'>{contents}</p>
            </div>
        </div>
    );
};

export default WorkCard;
