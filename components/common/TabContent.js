import React from 'react';

const TabContent = (props) => {
    const {tab, selected, child} = props;


    function isSelected() {
        if(tab === selected) {
            return child;
        }
        return  ''
    }
    return (
        <div>
            {isSelected()}
        </div>
    );
};

export default TabContent;
