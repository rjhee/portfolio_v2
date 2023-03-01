import React, { useState } from 'react';
import WorkCard from '../../components/work/workCard';
import CommonModal from '../../components/common/commonModal';
import Link from 'next/link';

const Work = (props) => {
  const { anchor } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-anchor={anchor}
      className="screen workExperience border flex flex-col justify-around"
    >
      <section className="title-box text-box w-full flex flex justify-center px-5 py-2">
        <h1 className="titleFont-kr mainText text-4xl font-black relative">
          제가 만든
        </h1>
        <div className="titleFont-kr mainText text-4xl font-black relative">
          서비스를 소개합니다.
          <div className="titleFont-kr shadowText text-4xl font-black absolute top-1 left-1 w-full">
            서비스를
          </div>
        </div>
      </section>

      <section
        onMouseMove={(e) => {
          console.log(e);
        }}
        className="workCard-box mx-4 relative mb-52 rounded-tl-xl rounded-tr-xl bg-white"
        style={{
          borderWidth: 30,
          borderColor: 'black',
          boxShadow: 'inset 0px 5px 15px 5px #D6D6D6',
        }}
      >
        <div
          className="pc-img absolute w-full rounded-b-xl box-content"
          style={{
            borderWidth: 30,
            borderColor: '#b3b5b6',
            bottom: '-22%',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0px 26px 10px 1px #C2C2C2',
          }}
        />
        <div
          className="pc-img absolute w-40 h-14"
          style={{
            backgroundColor: '#b3b5b6',
            bottom: '-36%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          className="pc-img absolute w-40 h-7 rounded-b-lg"
          style={{
            backgroundColor: '#8f9094',
            bottom: '-29%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          className="pc-img absolute w-2/5 h-14"
          style={{
            backgroundColor: '#b3b5b6',
            bottom: '-48%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: 20,
          }}
        />
        <div className="grid grid-cols-2 w-4/5 mx-auto">
          <Link href="/workExperience/detail">
            <WorkCard
              category={'App'}
              title={'FUDA LOTTO APP'}
              contents={
                'project description project description project description'
              }
            />
          </Link>
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </section>
    </div>
  );
};

export default Work;
