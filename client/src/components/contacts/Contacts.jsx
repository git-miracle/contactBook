import React, { useContext } from 'react';
import ContactContext from '../../contaxt/contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <>
      {contacts.map((contact) => (
        <h3>{contact.name}</h3>
      ))}
    </>
  );
};

export default Contacts;
