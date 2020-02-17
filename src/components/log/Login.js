import React from 'react'
import Button from '../buttons/Button'
import './Log.css'


const Login = () => {
  return (
    <div>
      <div className="col-8 offset-4 background-log">
      </div>

      <div className="col-4 offset-1 main-form">
        <h5 className="dark-blue">Inicia sesión y empieza a disfrutar</h5>
        <form>
          <label className="d-flex flex-column dark-blue">
            Email
            <input type="email" placeholder="Type your email" />
          </label>
          <label className="d-flex flex-column dark-blue">
            Password
            <input type="password" placeholder="Enter your password" />
          </label>

          <Button type='secondary' text="Log in" />
        </form>
      </div>
      
    </div>
  )
}

export default Login