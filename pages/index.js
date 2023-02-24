<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Contact from './contact';
import Projects from './projects';
import Profile from './Profile';
import Skills from './skills';
import WorkExperience from './workExperience';
import NavMenu from '../components/navMenu';
import Header from '../components/common/header';
import useWindowDimensions from '../components/common/windowDimensions';
import Anchor from '../components/common/Anchor';

const inter = Inter({ subsets: ['latin'] });
=======
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ContactPage from "./contact";
import ProjectsPage from "./projects";
import SkillsPage from "./skills";
import WorkPage from "./work";
import NavMenu from "../components/navMenu";
import Header from "../components/common/header";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })
>>>>>>> 2740c29c41df6272c487840d86e141ef30edc944

export default function Home() {
  const [isMenu, setIsMenu] = useState(false);
  const menu = [
    {
      name: 'profile',
      path: '#profile',
      state: true,
    },
    {
      name: 'project',
      path: '#project',
      state: true,
    },
    {
      name: 'skills',
      path: '#skills',
      state: true,
    },
    {
      name: 'work',
      path: '#work',
      state: true,
    },
    {
      name: 'contact',
      path: '#contact',
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
      </Head>
<<<<<<< HEAD
      <main
        className={styles.main}
        style={{ position: 'relative', top: -pageScrollTop + 'px' }}
      >
        {/* <NavMenu isOpen={isMenu} setIsOpen={() => setIsMenu(!isMenu)} /> */}
        {/* <Header onClick={()=> setIsMenu(!isMenu)}/> */}
        <Profile anchor={0} />
        <Projects anchor={1} />
        <Skills anchor={2} />
        <WorkExperience anchor={3} />
        <Contact anchor={4} />
=======
      <main className={styles.main}>
        <NavMenu isOpen={isMenu} setIsOpen={()=> setIsMenu(!isMenu)}/>
        <Header onClick={()=> setIsMenu(!isMenu)}/>
        {/*<ContactPage/>*/}
        <ProjectsPage/>
        <SkillsPage/>
        <WorkPage/>
>>>>>>> 2740c29c41df6272c487840d86e141ef30edc944
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
