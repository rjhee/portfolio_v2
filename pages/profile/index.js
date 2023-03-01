import React, { useState } from 'react';
import Logo from '../../components/common/logo';
import BackBtn from '../../components/profile/backBtn';
import ProfileCardBack from '../../components/profile/profileCardBack';
import ProfileCardFront from '../../components/profile/profileCardFront';

const Profile = (props) => {
  const { isOpen, anchor } = props;

  const [isFront, setIsFront] = useState(true);
  const [slide, setSlide] = useState(0);
  const [opaciting, setOpacitiong] = useState(1);

  function rotateCard(e) {
    // let SLIDE_TIME = 0;
    // let OPACITY_TIME = 1;
    // setTimeout(() => {
    //   setSlide(-100);
    //   setOpacitiong(0);
    // }, 2000);
    setIsFront(!isFront);
  }

  return (
    <div
      data-anchor={anchor}
      className="screen contact relative flex flex-col items-center justify-center"
    >
      <div
        className="w-9/12 h-3/4"
        style={{
          opacity: opaciting,
          transform: `translateX(${slide}%)`,
          boxShadow: ['20px 20px 60px #bebebe', '-20px -20px 60px #ffffff'],
        }}
      >
        {isFront === true ? <ProfileCardFront /> : <ProfileCardBack />}
      </div>
      <div className="fixed right-12 cursor-pointer hover:scale-125	 transition-all	">
        <BackBtn onClick={rotateCard} />
      </div>
    </div>
  );
};

export default Profile;
