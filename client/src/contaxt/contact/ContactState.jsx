import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {
  ADD_CONTCT,
  DELETE_CONTCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTCT,
  CLEAR_FILTER,
  UPDATE_CONTCT,
} from '../type'

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
    current: null,
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  //add contact
  const addContact = (contact) => {
    contact.id = uuidv4() //or Date.now()
    dispatch({ type: ADD_CONTCT, payload: contact })
  }

  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTCT, payload: id })
  }

  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTCT, payload: contact })
  }

  // set current contacts
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  //filter contact

  //clear contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}
export default ContactState
