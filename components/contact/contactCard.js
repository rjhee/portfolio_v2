import React from 'react';
import {BsCardChecklist, BsGithub, BsPhoneVibrate} from "react-icons/bs";
import IconCircle from "../common/iconCircle";;
import {VscGithubAlt} from "react-icons/vsc";
import Tooltip from "../common/tooltip";

const ContactCard = () => {
    return (
        <div className='px-3 pt-2 pb-4 drop-shadow-lg rounded-xl bg-white w-max h-max'>
            <span className='titleFont text-cyan-600 font-bold text-sm'>CONTACT</span>
            <div className='flex items-center justify-around'>
                <IconCircle icon={<VscGithubAlt/>} tooltip={'Go to Github'}/>
                <IconCircle icon={<BsPhoneVibrate/>} tooltip={'Call Phone'}/>
                <IconCircle icon={<BsCardChecklist/>} tooltip={'Go to see resume'}/>
            </div>
        </div>
    );
};

export default ContactCard;
