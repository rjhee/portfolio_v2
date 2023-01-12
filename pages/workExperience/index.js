import React, {useState} from 'react';
import WorkCard from "../../components/work/workCard";
import CommonModal from "../../components/common/commonModal";
import Link from "next/link";

const workExperience = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='screen workExperience border'>
            <div className='grid grid-cols-2 md:grid-cols-2 md:grid-flow-col'>
             <Link href='/workExperience/detail'>
                 <WorkCard
                     title={'Title'}
                     contents={'project description project description project description'}/>
             </Link>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
            </div>
        </div>
    );
};

export default workExperience;
