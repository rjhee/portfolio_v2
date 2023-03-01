import React from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';

const BackBtn = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="text-5xl">
      <BsArrowCounterclockwise />
    </button>
  );
};

export default BackBtn;
