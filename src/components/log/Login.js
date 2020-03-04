import React from 'react'
import AlphaGuideService from '../../services/AlphaGuideService'
import {Link, Redirect} from 'react-router-dom'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import Button from '../buttons/Button'
import './Log.css'


class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    error: false, 
    loading: false
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ loading: true, error: false }, () => {

      AlphaGuideService.login({ ...this.state.data })
        .then(
          (user) => {

            this.props.setUser(user)
          },
          () => {

            this.setState({ error: true, loading: false })
          }
        )
    })
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if (this.props.currentUser) {
      return <Redirect to="/profile"/>
    }

    return (
      <div className="register-container">
        <div className="col-8 offset-4 background-log-in">
        </div>

        <div className="col-xl-5 col-md-6 col-12 offset-1 main-form">
          <h5 className="dark-blue custom-form-title">Inicia sesión y empieza a disfrutar</h5>
          <form onSubmit={this.handleSubmit}>
            
            <div className="form-group">

              <label className="d-flex flex-column dark-blue" htmlFor="email">Email</label>

              <input
                value={this.state.data.email}
                onChange={this.handleChange}
                autoComplete="on"
                name="email"
                type="email"
                className={` form-group custom-input ${errorClassName}`}
                id="email"
                placeholder="Type your email"
              />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="mt-0 d-flex flex-column dark-blue">Password</label>

            <input
              value={this.state.data.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className={` form-group custom-input ${errorClassName}`}
              id="password"
              placeholder="Enter your password"
            />
          </div>
              
          <button
            type="submit"
            className="btn btn-block btn-primary mb-3 register"
            disabled={this.state.loading}
          >
            Log in
          </button>

          <div className="register-link-container">
            <Link to="/register" className="register-link">Register</Link>
          </div>
          
        </form>
      </div>

    </div>
    )
  }
}

export default WithAuthConsumer(Login)