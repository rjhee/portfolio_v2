import React from 'react';
import {BsCardChecklist, BsGithub, BsPhoneVibrate} from "react-icons/bs";
import IconCircle from "../common/iconCircle";;
import {VscGithubAlt} from "react-icons/vsc";

const ContactCard = () => {
    return (
        <div className='px-3 py-2 drop-shadow-lg rounded-xl bg-white w-80 h-40'>
            <span className='titleFont text-cyan-600 font-bold text-sm'>CONTACT</span>

            <div className='flex '>
                <IconCircle icon={<VscGithubAlt/>}/>
                <IconCircle icon={<BsPhoneVibrate/>}/>
                <IconCircle icon={<BsCardChecklist/>}/>
            </div>
        </div>
    );
};

export default ContactCard;
