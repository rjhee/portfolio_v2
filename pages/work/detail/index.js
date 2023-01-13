import React from 'react';
import { useRouter } from 'next/router'
import TabComponent from "../../../components/common/TabComponent";
import PagePathBtn from "../../../components/common/pagePathBtn";
import TimeLine from "../../../components/common/timeLine";

const WorkPage = () => {
    const router = useRouter()
    const workType = router?.query?.type;
    const asPath = router?.asPath;

    return (
        <div>
            <PagePathBtn workType={workType} asPath={asPath}/>
            <TabComponent/>
            <TimeLine/>
        </div>
    );
};

export default WorkPage;
