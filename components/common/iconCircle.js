import React, { useEffect, useState } from 'react';
import { BsBug } from 'react-icons/bs';
import Tooltip from './tooltip';

const IconCircle = (props) => {
  const { icon, tooltip } = props;
  const [child, setChild] = useState(null);
  console.log('iconCircle.js:8 ->', child);

  useEffect(() => {}, [child]);
  return (
    <div
      className="flex relative cursor-pointer m-2 rounded-full w-fit h-fit p-2 avatar avatar-circle border-4 border-grey shadow-lg bg-gray-300"
      onMouseOver={() => setChild(tooltip ? <Tooltip text={tooltip} /> : null)}
      onMouseOut={() => setChild(null)}
    >
      <div className="text-3xl text-white">{icon ? icon : <BsBug />}</div>
      {child}
    </div>
  );
};

export default IconCircle;
