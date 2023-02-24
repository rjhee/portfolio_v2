import React from 'react';
import Logo from '../../components/common/logo';
import ContactCard from '../../components/contact/contactCard';

<<<<<<< HEAD
const Contact = (props) => {
  const { isOpen, anchor } = props;
  return (
    <div
      data-anchor={anchor}
      className="screen contact flex flex-col items-center justify-center bg-gradient-to-r from-sky-300 to-blue-400"
    >
      <Logo />
      <ContactCard />
    </div>
  );
=======
const ContactPage = (props) => {
    const { isOpen } = props;
    return (
        <div className='screen contact flex flex-col items-center justify-center bg-gradient-to-r from-sky-300 to-blue-400'>
            <Logo/>
            <ContactCard/>
        </div>
    );
>>>>>>> 2740c29c41df6272c487840d86e141ef30edc944
};

export default ContactPage;
