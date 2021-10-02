import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const { email, password } = user

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('logined')
  }
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
          type='submit'
          value='Login'
          className='btn btn-block btn-primary'
        />
      </form>
    </div>
  )
}

export default Login
