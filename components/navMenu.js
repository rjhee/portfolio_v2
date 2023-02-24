import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  BsBriefcase,
  BsCollection,
  BsFlower1,
  BsInboxes,
  BsLaptop,
  BsPersonBadge,
  BsPuzzle,
  BsStar,
} from 'react-icons/bs';
import NavMenuText from './common/navMenuText';
import Logo from './common/logo';
import CloseButton from './common/closeButton';
import Link from 'next/link';

const NavMenu = (props) => {
  const { isOpen, setIsOpen } = props;
  const animate = isOpen === true ? 'slideShow' : 'slideHidden';
  const display = isOpen === true ? '' : 'hidden';

  return (
    <div
      className={`${display} z-20 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50`}
    >
      <div
        className={`animate-[${animate}_500ms_ease-in_1] flex flex-col items-center p-4 drop-shadow-md w-80 h-full bg-slate-200 drop-shadow-md`}
      >
        <div className="absolute left-72 top-3">
          <CloseButton onClick={setIsOpen} />
        </div>
        <Logo />
        <ul className="flex flex-col justify-between w-full">
          <li>
            <Link href={'contact'}>
              <NavMenuText text={'Contact'} icon={<BsPersonBadge />} />
            </Link>
          </li>
          <li>
            <NavMenuText text={'Skills'} icon={<BsStar />} />
          </li>
          <li>
            <NavMenuText text={'Work'} icon={<BsLaptop />} />
          </li>
          <li>
            <NavMenuText text={'Projects'} icon={<BsInboxes />} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
