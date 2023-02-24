import React from 'react';
import Logo from '../../components/common/logo';
import ContactCard from '../../components/contact/contactCard';

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
};

export default Contact;
