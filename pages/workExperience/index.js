import React, {useState} from 'react';
import WorkCard from "../../components/workCard";
import CommonModal from "../../components/commonModal";

const workExperience = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='screen workExperience border'>
            <h1>workExperience</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 md:grid-flow-col'>
                <CommonModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                <WorkCard
                    setIsOpen={()=>setIsOpen(!isOpen)}
                    title={'Title'}
                    img={'/assets/img/html.jpg'}
                    contents={'project description'}/>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
            </div>
        </div>
    );
};

export default workExperience;
