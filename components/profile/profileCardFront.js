import React from 'react';
import ContantSection from './contantSection';
import ProfileSection from './profileSection';

const ProfileCardFront = () => {
  return (
    <div className="profileCard-front flex h-full baigeBg p-4">
      <ProfileSection />
      <ContantSection
        introduction={[
          '1111',
          '2222',
          '33333',
          '44444',
          '55555',
          '66666',
          '77777',
          '88888',
        ]}
        career={[
          '2021.11.08 ~ 2023.01.31 (1년3개월)',
          '(주)바닐라코드 프론트엔드 개발자',
        ]}
      />
    </div>
  );
};

export default ProfileCardFront;
