import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const { name, email, password, password2 } = user

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('registered')
  }
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <input
          className='form-group'
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          className='form-group'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
        <input
          className='form-group'
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <input
          className='form-group'
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Register'
          className='btn btn-block btn-primary'
        />
      </form>
    </div>
  )
}

export default Register
