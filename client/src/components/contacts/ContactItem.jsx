import React, { useContext } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTrashAlt,
  FaEdit,
} from 'react-icons/fa'
import ContactContext from '../../contaxt/contact/ContactContext'

const ContactItem = ({ contact }) => {
  const contactCntext = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = contactCntext
  const { id, name, email, phone, type } = contact

  const onDelete = () => {
    deleteContact(id)
    clearCurrent()
  }
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left tc'>
        {name}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'profesional'
              ? 'badge-success'
              : 'badge-primary')
          }
        >
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
        <FaEdit
          style={{ color: 'blue' }}
          onClick={() => setCurrent(contact)}
        />
        <FaTrashAlt style={{ color: 'red' }} onClick={onDelete} />
      </div>
    </div>
  )
}

export default ContactItem
