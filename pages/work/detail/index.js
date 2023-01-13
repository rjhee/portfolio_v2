import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import TabComponent from "../../../components/common/TabComponent";
import PagePathBtn from "../../../components/common/pagePathBtn";
import TimeLine from "../../../components/common/timeLine";
import Image from "next/image";
import ListCard from "../../../components/common/listCard";
import ArticleCard from "../../../components/common/articleCard";
import FirstWork from "./firstWork";
import SecondWork from "./secondWork";
import ThirdWork from "./thirdWork";
import ForthWork from "./forthWork";


const WorkPage = () => {
    const router = useRouter()
    const workType = router?.query?.type;
    const asPath = router?.asPath;

    const [component, setComponent] = useState();

    useEffect(()=>{
        switch (workType) {
            case 'first' :
                setComponent(<FirstWork/>);
                break;
            case 'second' :
                setComponent(<SecondWork/>);
                break;
            case 'third' :
                setComponent(<ThirdWork/>);
                break;
            case 'forth' :
                setComponent(<ForthWork/>);
                break;
        }


    },[])
    return (
        <div>
            <PagePathBtn workType={workType} asPath={asPath}/>
            {/*<div className='relative bg-[url("/assets/img/phone.png")] bg-no-repeat w-60 h-96 bg-contain bg-center z-10'></div>*/}
            {component}
        </div>
    );
};

export default WorkPage;
