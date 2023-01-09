import React from 'react';
import Image from "next/image";

const WorkCard = (props) => {
    const {img, title, contents, setIsOpen} = props;
    return (
        <button onClick={setIsOpen}>
            <div className='flex flex-row justify-between drop-shadow-lg rounded-md bg-white
                        m-2 p-4 hover:drop-shadow-2xl cursor-pointer transition-shadow
                        md:flex-col justify-center items-center '>
                <h2 className='mb-2 font-bold text-2xl'>{title}</h2>
                <Image
                    src={img}
                    alt='project image'
                    width={100}
                    height={100}
                    className='mb-2'/>
                <p>{contents}</p>
            </div>
        </button>
    );
};

export default WorkCard;
