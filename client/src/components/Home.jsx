import React from 'react'
import ContactForm from './ContactForm'
import Contacts from './contacts/Contacts'
import ContactFliter from './ContactFliter'

function Home() {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFliter />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
