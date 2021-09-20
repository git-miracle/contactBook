import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaUserEdit, FaTrashAlt, FaEdit } from 'react-icons/fa';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left tc'>
        {name}
        <span style={{ float: 'right' }} className={'badge ' + (type === 'profesional' ? 'badge-success' : 'badge-primary')}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <FaEnvelopeOpen /> {email}
          </li>
        )}
        {phone && (
          <li className='center-items-v'>
            <FaPhoneSquareAlt /> <span>{phone}</span>
          </li>
        )}
      </ul>
      <div className='edit-del'>
        <FaEdit style={{ color: 'blue' }} />
        <FaTrashAlt style={{ color: 'red' }} />
      </div>
    </div>
  );
};

export default ContactItem;
