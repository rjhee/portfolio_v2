import React from 'react';
import { BsCheck, BsCheck2 } from 'react-icons/bs';

const ContantSection = (props) => {
  const { career, introduction } = props;
  return (
    <section className="contents-box flex flex-col justify-center w-3/5 mx-8">
      <div className="career-box mb-6 flex">
        <div className="mr-4">
          <h1 className="titleFont-kr text-2xl leading-7">경력</h1>
          <span className="subFont-en uppercase text-sm text-gray-500	">
            career
          </span>
        </div>
        <ul>
          {career?.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="introduction-box ">
        <div className="mb-4">
          <h1 className="titleFont-kr text-2xl leading-7">저를 소개합니다</h1>
          <span className="subFont-en uppercase text-sm text-gray-500	">
            self-introduction
          </span>
        </div>

        <ul>
          {introduction?.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <li className="flex items-center pl-2">
              <BsCheck />
              <span className="ml-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContantSection;
