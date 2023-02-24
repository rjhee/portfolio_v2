import Image from 'next/image';
import React from 'react';
import useWindowDimensions from '../../components/common/windowDimensions';
import img from '../../public/assets/img/profile.png';

const Profile = (props) => {
  const { anchor } = props;

  const { height, width } = useWindowDimensions();
  return (
    <div
      data-anchor={anchor}
      className="screen projects relative overflow-hidden"
    >
      <div className="w-full h-4/5 absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden z-50	">
        <Image
          src={img}
          alt="project image"
          width={'100%'}
          height={'auto'}
          className="h-full w-auto mx-auto"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center my-10">
        <span className="titleFont mainText text-8xl font-black">
          안녕하세요,
        </span>
        <span className="titleFont mainText text-9xl font-black relative">
          저는 무슨무슨
          <span className="titleFont shadowText text-9xl font-black absolute top-2 left-2 w-full">
            저는 무슨무슨
          </span>
        </span>
        <span className="titleFont mainText text-8xl font-black">
          프론트엔드 개발자 입니다.
        </span>
      </div>
    </div>
  );
};

export default Profile;
