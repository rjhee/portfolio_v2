import Image from 'next/image';
import React from 'react';

const ProfileCardBack = () => {
  return (
    <div className="profileCard-back h-full">
      <div className="bg-sky-300 w-full h-1/3 " />
      <h1 className="uppercase text-3xl subFont-en font-bold p-4">
        iam frontend developer
      </h1>
    </div>
  );
};

export default ProfileCardBack;
