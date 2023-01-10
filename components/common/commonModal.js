import React from 'react';
import CloseButton from "./closeButton";

const CommonModal = (props) => {
    const {contents, isOpen, setIsOpen} = props;
    return (
       <>
           {isOpen === true
               ? <div className='bg-black bg-opacity-50 w-full h-full fixed top-0 left-0 z-50'>
                   <div className='flex flex-col relative p-2 bg-white w-5/6 h-2/3 rounded-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:w-2/3 h-2/3'>
                       <div className='absolute right-3'>
                           <CloseButton isOpen={isOpen} onClick={setIsOpen}/>
                       </div>
                       <div>
                           {contents}
                       </div>
                   </div>
               </div>
               : null
           }
       </>
    );
};

export default CommonModal;
