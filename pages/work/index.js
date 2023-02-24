import React, {useState, useEffect} from 'react';
import WorkCard from "../../components/work/workCard";
import CommonModal from "../../components/common/commonModal";
import Link from "next/link";

const workPages = () => {
    const [workData, setWorkData] = useState([]);

    useEffect(()=>{
        setWorkData([
            {pathname:'/work/detail', query: { type: 'first' }, title: 'first', content: 'project description project description project description'},
            {pathname:'/work/detail', query: { type: 'second' }, title: 'second', content: 'project description project description project description'},
            {pathname:'/work/detail', query: { type: 'third' }, title: 'third', content: 'project description project description project description'},
            {pathname:'/work/detail', query: { type: 'forth' }, title: 'forth', content: 'project description project description project description'},
        ])
    },[])

    return (
        <div className='screen workExperience border'>
            <div className='grid grid-cols-2 md:grid-cols-2 md:grid-flow-col'>
                {workData?.map((item, i)=>
                    <Link
                        key={i}
                        href={{
                            pathname: item?.pathname,
                            query: item?.query
                        }}>
                        <WorkCard
                            title={item?.title}
                            contents={item?.content}/>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default workPages;
