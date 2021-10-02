import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../contaxt/contact/ContactContext'

const ContactFliter = () => {
  const contactContext = useContext(ContactContext)
  const { filterContacts, clearFilter, filtered } = contactContext
  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Search contacts...'
        onChange={onChange}
      />
    </form>
  )
}

export default ContactFliter
