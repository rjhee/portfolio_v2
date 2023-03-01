import Image from 'next/image';
import React from 'react';
import useWindowDimensions from '../../components/common/windowDimensions';
import img from '../../public/assets/img/profile.png';
import cloudImg1 from '../../public/assets/img/cloud_1.png';
import cloudImg2 from '../../public/assets/img/cloud_2.png';
import cloudImg3 from '../../public/assets/img/cloud_3.png';

const Main = (props) => {
  const { anchor } = props;

  const { height, width } = useWindowDimensions();
  return (
    <div
      data-anchor={anchor}
      className="screen projects relative overflow-hidden bg-sky-200"
    >
      <div className="cloud-box top-0 left-0 z-0">
        <div className="absolute top-8 left-3">
          <Image
            src={cloudImg1}
            alt="project image"
            width={'100%'}
            height={'auto'}
            className="h-auto w-2/3 mx-auto drop-shadow-2xl"
          />
        </div>
        <div className="absolute top-0 left-96">
          <Image
            src={cloudImg1}
            alt="project image"
            width={'100%'}
            height={'auto'}
            className="h-auto w-1/3 mx-auto drop-shadow-2xl"
          />
        </div>
        <div className="absolute top-3 right-1">
          <Image
            src={cloudImg2}
            alt="project image"
            width={'100%'}
            height={'auto'}
            className="h-auto w-1/2 mx-auto drop-shadow-2xl"
          />
        </div>
        <div className="absolute bottom-3	left-5">
          <Image
            src={cloudImg3}
            alt="project image"
            width={'100%'}
            height={'auto'}
            className="h-auto w-2/3 mx-auto drop-shadow-2xl"
          />
        </div>
        <div className="absolute bottom-28 right-5">
          <Image
            src={cloudImg3}
            alt="project image"
            width={'100%'}
            height={'auto'}
            className="h-auto w-4/5 mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="profileImg-box w-full h-4/5 absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden z-50">
        <Image
          src={img}
          alt="project image"
          width={'100%'}
          height={'auto'}
          className="h-full w-auto mx-auto"
        />
      </div>
      <div className="title-box w-full flex flex-col items-center justify-center my-10 z-40">
        <span className="z-40 titleFont-kr mainText text-8xl font-black">
          안녕하세요,
        </span>
        <span className="z-40 titleFont-kr mainText text-9xl font-black relative">
          저는 무슨무슨
          <span className="titleFont-kr shadowText text-9xl font-black absolute top-2 left-2 w-full">
            저는 무슨무슨
          </span>
        </span>
        <span className="z-40 titleFont-kr mainText text-8xl font-black">
          프론트엔드 개발자 입니다.
        </span>
      </div>
    </div>
  );
};

export default Main;
