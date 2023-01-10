import React from 'react';

const TabBtn = (props) => {
    const {tab, selected, tabTitle, onClick, color} = props;
    let style = color ? color : 'sky'

    function isSelected() {
        if(tab === selected) {
            return <div className={`w-full h-1 bg-${style}-700 rounded-sm`}/>
        }
        return  <div className={`w-full h-1 bg-white rounded-sm`}/>
    }

    return (
        <div className='flex flex-col justify-end items-center w-24 h-10'>
           <button
               className={`font-bold text-lg text-${style}-700`}
               onClick={()=> onClick(tab)}>
               {tabTitle ? tabTitle : 'Tab1'}
           </button>
            {isSelected()}
            <div className={`w-full h-1 bg-${style}-700 rounded-sm`}/>
        </div>
    );
};

export default TabBtn;
