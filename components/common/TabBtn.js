import React, {useEffect, useState} from 'react';

const TabBtn = (props) => {
    const {tab, selected, tabTitle, onClick, color} = props;


    function isSelected() {
        if(tab === selected) {
            return (
                <>
                    <button
                        className={`font-bold text-lg text-blue-600`}
                        onClick={()=> onClick(tab)}>
                        <span>{tabTitle ? tabTitle : 'Tab'+tab}</span>
                    </button>
                    <span className='h-1 w-full bg-blue-500 rounded-full'/>
                </>
            )
        }
        return (
            <>
                <button
                    className={`font-bold text-lg text-gray-500`}
                    onClick={()=> onClick(tab)}>
                    <span>{tabTitle ? tabTitle : 'Tab'+tab}</span>
                </button>
                <span className='h-1 w-full bg-white rounded-full'/>
            </>
        )
    }

    return (
        <div className='flex flex-col justify-end items-center w-24 h-10'>
            {/*<button*/}
            {/*    className={`font-bold text-lg text-gray-500`}*/}
            {/*    onClick={()=> onClick(tab)}>*/}
            {/*    <span>{tabTitle ? tabTitle : 'Tab'+tab}</span>*/}
            {/*</button>*/}
            {isSelected()}
        </div>
    );
};

export default TabBtn;
