import React from 'react'
import AlphaGuideService from '../../services/AlphaGuideService'
import CountryService from '../../services/CountryService'
import { Link, Redirect } from 'react-router-dom'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import './Log.css'
import Button from '../buttons/Button'
import countries from '../../data/countries.json'


class Register extends React.Component {
  
  state = {
    data: {
      username: '',
      name: '',
      email: '',
      password: '',
      image: null,
      country: '1'
    },
    error: false,
    loading: false,
    success: false,
    countries: []
  }

  handleChange = (event) => {
    const {name, value, files} = event.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: files ? files[0] : value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { data } = this.state

    const formData = new FormData()
    formData.append('username', data.username )
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('image', data.image)
    formData.append('country', data.country)

    this.setState({ loading: true, error: false}, () => {
      AlphaGuideService.register(formData)
        .then(() => {
          this.setState({ success: true })
        })
        .catch(() => {
          this.setState({ error: true, loading: false})
        })
    })
  }

  componentDidMount = () => {
    CountryService.findCountries().then(countries => {
      this.setState({
        countries: countries
      })

    }
  )
    this.setState()
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if(this.state.success) {
      return <Redirect to='/login' />
    } 

    if (this.props.currentUser) {
      return <Redirect to="/"/>
    }

    return (

      <div className="register-container">
        <div className="col-8 offset-4 background-log">
        </div>
      
        <div className="col-xl-5 col-md-6 col-12 offset-1 main-form">
          <h5 className="dark-blue custom-form-title">Registrate y haz el viaje de tus sueños</h5>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">

              <label htmlFor="name" className=" d-flex flex-column dark-blue">Name </label>

              <input
                value={this.state.data.name}
                onChange={this.handleChange}
                autoComplete="off"
                name="name"
                type="text"
                className={` form-group custom-input ${errorClassName}`}
                id="name"
                placeholder="Enter your fullname"
              />
              
            </div>


            <div className="form-group">

              <label htmlFor="username" className=" mt-0 d-flex flex-column dark-blue">Username</label>

              <input
                value={this.state.data.username}
                onChange={this.handleChange}
                autoComplete="off"
                name="username"
                type="text"
                className={` form-group custom-input${errorClassName}`}
                id="username"
                placeholder="Choose an username"
              />

            </div>

            <div className="form-group ">

              <label htmlFor="country" className=" mt-0 d-flex flex-column dark-blue">Country</label>
              
              <select
                name="country"
                onChange={this.handleChange}
                value={this.state.data.country}
                id="country"
                className="custom-input mb-3"
              >
                <option disabled>Select your country</option>
                {this.state.countries.map((c, i) => (
                  <option value={c.name} key={i}>{c.name}</option>
                ))}

              </select>
            </div>

            <div className="form-group">

              <label htmlFor="email" className=" mt-0 d-flex flex-column dark-blue">Email</label>

              <input
                value={this.state.data.email}
                onChange={this.handleChange}
                autoComplete="off"
                name="email"
                type="email"
                className={` form-group custom-input ${errorClassName}`}
                id="email"
                placeholder="Enter your email"
              />

            </div>

            <div className="form-group">

              <label htmlFor="password" className=" mt-0 d-flex flex-column dark-blue">Password</label>

              <input
                value={this.state.data.password}
                onChange={this.handleChange}
                autoComplete="off"
                name="password"
                type="password"
                className={` form-group custom-input ${errorClassName}`}
                id="password"
                placeholder="Set your password"
              />

            </div>

            <div className="form-group">

              <label htmlFor="image" className=" mt-0 d-flex flex-column dark-blue">Image</label>

              <input
                onChange={this.handleChange}
                name="image"
                type="file"
                className={`form-group custom-input ${errorClassName}`}
                id="image"
              />

            </div>

            <button
              type="submit"
              className="btn btn-block btn-primary mb-3 register"
              disabled={this.state.loading}
            >
              Register
            </button>

          </form>
        </div>
      </div>
    )
  }


}

export default WithAuthConsumer(Register)