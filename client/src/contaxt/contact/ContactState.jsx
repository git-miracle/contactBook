import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactCotext from './ContactContext';
import ContactReducer from './ContactReducer';
import { ADD_CONTCT, DELETE_CONTCT, SET_CURRENT, CLEAR_CURRENT, FILTER_CONTCT, CLEAR_FILTER, UPDATE_CONTCT } from '../type';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'farhad nazmi',
        email: 'farhad@gmail.com',
        phone: '111-222-333',
        type: 'profesional',
      },
      {
        id: 2,
        name: 'dean nazmi',
        email: 'dean@gmail.com',
        phone: '111-222-334',
        type: 'profesional',
      },
      {
        id: 3,
        name: 'milad nazmi',
        email: 'milad@gmail.com',
        phone: '111-222-335',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contact
  //delete contact
  //update contact
  // set current contacts
  //filter contact
  //clear contact
  return <ContactCotext.Provider value={{ contact: state.contacts }}>{props.children}</ContactCotext.Provider>;
};
export default ContactState;
