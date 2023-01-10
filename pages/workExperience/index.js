import React, {useState} from 'react';
import WorkCard from "../../components/work/workCard";
import CommonModal from "../../components/common/commonModal";
import Link from "next/link";

const workExperience = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='screen workExperience border'>
            <h1>workExperience</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 md:grid-flow-col'>
             <Link href='/workExperience/detail'>
                 <WorkCard
                     title={'Title'}
                     img={'/assets/img/html.jpg'}
                     contents={'project description'}/>
             </Link>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
            </div>
        </div>
    );
};

export default workExperience;
