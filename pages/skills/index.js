import React from 'react';
import SkillCard from "../../components/skills/skillCard";

const Skills = () => {
    return (
        <div className='screen bg-slate-200	'>
           <h1>skills</h1>
            <SkillCard percent={80}/>
        </div>
    );
};

export default Skills;
