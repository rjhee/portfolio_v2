import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Main from './main';
import Projects from './projects';
import Profile from './Profile';
import Skills from './skills';
import Work from './work';
import NavMenu from '../components/navMenu';
import Header from '../components/common/header';
import useWindowDimensions from '../components/common/windowDimensions';
import Anchor from '../components/common/Anchor';
import {
  BsFillBookFill,
  BsFillDisplayFill,
  BsFillGiftFill,
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillTerminalFill,
  BsFolder,
  BsFolder2Open,
  BsGem,
  BsHouseDoor,
  BsPencil,
  BsPerson,
} from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isMenu, setIsMenu] = useState(false);
  const menu = [
    {
      name: 'main',
      path: '#main',
      icon: <BsFillHouseFill />,
      state: true,
    },
    {
      name: 'profile',
      path: '#profile',
      icon: <BsFillPersonFill />,
      state: true,
    },
    {
      name: 'work',
      path: '#work',
      icon: <BsFillDisplayFill />,
      state: true,
    },
    {
      name: 'skills',
      path: '#skills',
      icon: <BsFillTerminalFill />,
      state: true,
    },
    {
      name: 'project',
      path: '#project',
      icon: <BsFillBookFill />,
      state: true,
    },
  ];

  const [pageScrollTop, setPageScrollTop] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickedClose, setIsClickedClose] = useState(false);
  const [autoSlide, setAutoSlide] = useState(false);

  const PC = 1200;
  const MOBILE = 500;
  const MENU = 5;

  const { height, width } = useWindowDimensions();

  let slidePages = {};

  slidePages.tolerance = 0;
  slidePages.isChanging = false;
  slidePages.directionUp = -1;
  slidePages.directionDown = 1;
  slidePages.numAnchors = MENU - 1;
  slidePages.anchorPositions = [];
  slidePages.touchStartY = 0;

  useEffect(() => {
    if (!!isModalOpen === false) {
      window.addEventListener('touchstart', startTouchFn);
    }
    return () => {
      window.removeEventListener('touchstart', startTouchFn);
    };
  }, [isModalOpen]);

  const startTouchFn = (e) => {
    startTouch(e);
  };

  function startTouch(e) {
    slidePages.touchStartY = e.touches[0].clientY;
  }

  function goToAnchor(num, tolerance) {
    startPartnersBanner(num);
    if (num < 0) {
      return;
    } else if (num === 5) {
      return;
    }
    const top = slidePages.anchorPositions[num] + tolerance;
    // console.log('Main.jsx:50 ->',slidePages);
    // console.log('Main.jsx:51 ->',num);
    // console.log('Main.jsx:52 ->',tolerance);
    slidePages.currentAnchor = num;

    setCurrentPage(num);
    console.log('스크롤 위치 : ', top);
    console.log('앵커 위치 : ->', num);
    setPageScrollTop(top);
  }

  const handleWheelEventFn = (e) => {
    handleWheelEvent(e);
  };

  function handleWheelEvent(e) {
    e.preventDefault();
    let direction = 0;
    let wheelDelta = null;
    let time = 0;
    if (slidePages.isChanging) {
      return;
    }

    slidePages.isChanging = true;

    if (e.type === 'touchmove') {
      wheelDelta =
        slidePages.touchStartY < e.touches[0].clientY
          ? 200 // up
          : -200; // down
      time = MOBILE;
    } else {
      wheelDelta = e.wheelDelta || e.deltaY;
      time = PC;
    }

    if (wheelDelta > 0) {
      console.log('up');
      direction = slidePages.directionUp;
    } else {
      console.log('down');
      direction = slidePages.directionDown;
    }

    let anchor = 0;

    if (direction === slidePages.directionDown) {
      anchor =
        slidePages.currentAnchor + 1 < MENU
          ? slidePages.currentAnchor + 1
          : MENU - 1;
    } else {
      anchor =
        slidePages.currentAnchor - 1 > 0 ? slidePages.currentAnchor - 1 : 0;
    }

    console.log('이전 페이지 index : ->', slidePages.currentAnchor);
    console.log('현재 페이지 index : ->', anchor);

    goToAnchor(anchor, slidePages.tolerance);
    setTimeout(() => {
      slidePages.isChanging = false;
    }, time);
  }

  function startPartnersBanner(anchor) {
    if (anchor === MENU) {
      setAutoSlide(true);
    }
  }

  for (let i = 0; i < MENU; i++) {
    slidePages.anchorPositions.push(height * i);
  }

  useEffect(() => {
    setPageScrollTop(0);
    slidePages.currentAnchor = 0;
  }, []);

  useEffect(() => {
    if (isClickedClose === true) {
      slidePages.currentAnchor = 3;
      slidePages.touchStartY = 3;
    }
  }, [isClickedClose]);

  useEffect(() => {
    if (!!isModalOpen === false) {
      console.log('Main.jsx:152 ->', slidePages.currentAnchor);
      window.addEventListener('wheel', handleWheelEventFn, { passive: false });
      window.addEventListener('touchmove', handleWheelEventFn, {
        passive: false,
      });
    }
    return () => {
      window.removeEventListener('wheel', handleWheelEventFn);
      window.removeEventListener('touchmove', handleWheelEventFn);
    };
  }, [isModalOpen]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className={styles.main}
        style={{ position: 'relative', top: -pageScrollTop + 'px' }}
      >
        {/* <NavMenu isOpen={isMenu} setIsOpen={() => setIsMenu(!isMenu)} /> */}
        {/* <Header onClick={()=> setIsMenu(!isMenu)}/> */}
        <Main anchor={0} />
        <Profile anchor={1} />
        <Work anchor={2} />
        <Skills anchor={3} />
        <Projects anchor={4} />
      </main>
      <Anchor
        data={menu}
        currentPage={currentPage}
        goToAnchor={goToAnchor}
        slidePages={slidePages}
      />
    </>
  );
}
