import React from 'react';
import Image from 'next/image';
import ContactCard from './contactCard';
import profileIma from '../../public/assets/img/profile.png';

const ProfileSection = () => {
  return (
    <section
      style={{ borderColor: '#004d75', borderRightWidth: 2 }}
      className="profile-box relative flex flex-col items-center justify-center w-2/5 px-8"
    >
      <div
        style={{
          borderColor: '#004d75',
          borderTopWidth: 2,
          borderRightWidth: 2,
        }}
        className="absolute -right-3.5 top-20 w-6 h-6 rotate-45 baigeBg"
      />
      <div className="profile-img mb-4">
        <Image
          src={profileIma}
          alt="profile image"
          width={'100%'}
          height={'auto'}
          className="h-auto w-full mx-auto drop-shadow-2xl"
        />
      </div>
      <div className="profile-name mb-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl titleFont-kr">노재희</h1>
        <h1 className="text-xl subFont-en">NOH JAE HEE</h1>
      </div>
      <div className="profile-contact">
        <ContactCard />
      </div>
    </section>
  );
};

export default ProfileSection;
