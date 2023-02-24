import React from 'react';
import SkillCard from '../../components/skills/skillCard';

<<<<<<< HEAD
const Skills = (props) => {
  const { anchor } = props;
  return (
    <div data-anchor={anchor} className="screen bg-slate-200	">
      <SkillCard />
      <SkillCard />
    </div>
  );
=======
const SkillsPage = () => {
    return (
        <div className='screen bg-slate-200	'>
            <SkillCard/>
            <SkillCard/>
        </div>
    );
>>>>>>> 2740c29c41df6272c487840d86e141ef30edc944
};

export default SkillsPage;
