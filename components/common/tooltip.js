import React from 'react';
import {BsFillCaretUpFill} from "react-icons/bs";

const Tooltip = (props) => {
    const {text} = props;
    return (
        <div className='absolute -bottom-2/3 left-1/2 translate-y-1/2 -translate-x-1/2 grow shrink-0 w-max py-2 px-3 bg-slate-700 rounded shadow-lg'>
            <span className='absolute -top-2.5 left-1/2 -translate-x-1/2 text-slate-700'>
                <BsFillCaretUpFill/>
            </span>
            <div className='text-white'>
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
