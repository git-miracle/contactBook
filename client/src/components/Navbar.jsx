import React from 'react';
import { Link } from 'react-router-dom';

import { FaAddressCard } from 'react-icons/fa';

function Navbar(props) {
  return (
    <div className='bg-primary '>
      <div className='navbar container'>
        <Link to='/'>
          <h1 className='center-items'>
            <FaAddressCard style={{ marginRight: '3px' }} />
            {props.title}
          </h1>
        </Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
