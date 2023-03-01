import React from 'react';
import Image from 'next/image';

const WorkCard = (props) => {
  const { img, category, title, contents } = props;
  return (
    <div
      className="flex justify-center  items-center h-44 drop-shadow-lg rounded-sm bg-white
                    m-3 hover:drop-shadow-2xl hover:bg-black hover:text-white  cursor-pointer transition-shadow transition ease-in-out delay-150 slideShow overflow-hidden"
    >
      <div className="w-1/2 h-full shrink-0">
        {img ? (
          <Image
            src={img}
            alt="project image"
            width={100}
            height={100}
            className="mb-2"
          />
        ) : (
          <div className="bg-blue-100 w-full h-full" />
        )}
      </div>
      <div className="w-1/2 h-full flex flex-col justify-start p-2 ">
        <span className="text-sm text-slate-400	m-1">{category}</span>
        <h2 className="mb-2 font-bold text-2xl titleFont">{title}</h2>
        <p className="text-gray-600">{contents}</p>
      </div>
    </div>
  );
};

export default WorkCard;
