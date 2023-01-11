import React from 'react';

const SkillCard = (props) => {
    const {percent} = props;

    return (
        <div
            style={{width:percent+"%", height:percent+"%"}}
            className='bg-white rounded-full shadow-inner shadow-2xl shadow-zinc-500/40 hover:scale-110 transition-all'>

        </div>
    );
};

export default SkillCard;
