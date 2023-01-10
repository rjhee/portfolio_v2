import React, {useState} from 'react';
import TabBtn from "./TabBtn";
import TabContent from "./TabContent";

const TabComponent = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div>
           <div className='flex'>
               <TabBtn tab={0} selected={selected} onClick={setSelected}/>
               <TabBtn tab={1} selected={selected} onClick={setSelected}/>
           </div>
            <div className='p-2'>
                <TabContent tab={0} selected={selected} child={'tab11111'}/>
                <TabContent tab={1} selected={selected} child={'tab22222'}/>
            </div>
        </div>
    );
};

export default TabComponent;
