import React from 'react';
import Contacts from './contacts/Contacts';

function Home() {
  return (
    <div className='grid-2'>
      <div>{/* FORM */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
