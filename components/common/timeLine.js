import React from 'react';

const TimeLine = () => {

    const data = [
        {title: 'title1', subTitle:'subTitle2', date:'2022.01.01', state:'D'},
        {title: 'title1', subTitle:'subTitle2', date:'2022.01.01', state:'D'},
        {title: 'title1', subTitle:'subTitle2', date:'2022.01.01', state:'P'}
    ]

    function setStateColor(state){
        if(state === 'D') {
            return 'gray';
        }else if(state === 'P') {
            return 'emerald';
        }
        return 'gray';
    }

    return (
        <ul>
            {data?.map((item,i)=>
                <li key={i} className='flex items-start m-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className={`w-3 h-3 rounded-full m-2 bg-gray-200 bg-${setStateColor(item?.state)}-500`}/>
                        {
                            i !== data?.length - 1
                            ? <div className='w-0.5 h-20 bg-gray-200'/>
                            : null
                        }
                    </div>
                    <div className='flex flex-col mx-2'>
                        <span className={`font-bold text-${setStateColor()}-500 my-1`}>{item?.title}</span>
                        <span className='text-gray-500 my-1'>{item?.subTitle}</span>
                        <span className='text-gray-500 my-1'>{item?.date}</span>
                    </div>
                </li>
            )}

        </ul>
    );
};

export default TimeLine;