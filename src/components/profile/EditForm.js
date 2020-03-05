import React from 'react'
import AlphaGuideService from '../../services/AlphaGuideService'
import CountryService from '../../services/CountryService'
import { Link, Redirect } from 'react-router-dom'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import Button from '../buttons/Button'
import countries from '../../data/countries.json'
import './Profile.css'

class EditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        username: this.props.currentUser.username,
        name: this.props.currentUser.name,
        image: this.props.currentUser.image,
        country: this.props.currentUser.country
      },
      error: false,
      loading: false,
      success: false,
      countries: []
    }
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

    this.setState({ loading: true, error: false}, () => {
    
      const formData = new FormData()
        formData.append('username', this.state.data.username )
        formData.append('name', this.state.data.name)
        formData.append('image', this.state.data.image)
        formData.append('country', this.state.data.country)

      AlphaGuideService.edit(formData)
        .then((user) => {
            this.props.setUser(user)
            this.setState({ success: true })
            this.props.setEditShowModal(false)
        })
        .catch(() => {
          this.setState({ error: true, loading: false})
        })
    })
  }

  componentDidMount = () => {
    CountryService.findCountries().then(countries => {
      this.setState({
        ...this.state,
        countries: countries
      })
    }
  )}

  render() {

    const errorClassName = this.state.error ? 'is-invalid' : ''
    if(this.state.success) {
      return <Redirect to='/profile' />
    } 
    if (!this.props.currentUser) {
      return <Redirect to="/"/>
    }
    return (

      <div className="modal-main">
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="d-flex flex-column dark-blue">Name</label>
              <input
                value={this.state.data.name}
                onChange={this.handleChange}
                autoComplete="off"
                name="name"
                type="text"
                className={`edit-input form-group ${errorClassName}`}
                id="name"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username"
              className="d-flex flex-column dark-blue">Username</label>
              <input
                value={this.state.data.username}
                onChange={this.handleChange}
                autoComplete="off"
                name="username"
                type="text"
                className={`edit-input form-group ${errorClassName}`}
                id="username"
                placeholder="Choose an username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country"
              className="d-flex flex-column dark-blue">Country</label>
              <select
                name="country"
                onChange={this.handleChange}
                value={this.state.data.country}
                id="country"
                className="edit-input"
              >
                <option disabled>Select your country</option>
                {this.state.countries.map((c, i) => (
                  <option value={c.name} key={i}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image"
              className="d-flex flex-column dark-blue">Image</label>
              <input
                onChange={this.handleChange}
                name="image"
                type="file"
                className={`edit-input form-control-file ${errorClassName}`}
                id="image"
              />
            </div>
            <button
              type="submit"
              className="btn btn-block btn-primary mt-5 edit-btn register"
              disabled={this.state.loading}
            >
              Save Changes
            </button>
          </form>
        </div>
    )
  }
}

export default WithAuthConsumer(EditForm)