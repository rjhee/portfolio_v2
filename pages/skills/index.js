import React from 'react';
import SkillCard from '../../components/skills/skillCard';

const Skills = (props) => {
  const { anchor } = props;
  return (
    <div data-anchor={anchor} className="screen bg-slate-200	">
      <SkillCard />
      <SkillCard />
    </div>
  );
};

export default Skills;
