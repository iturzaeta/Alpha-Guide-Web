import React from 'react'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import {Route, Redirect} from 'react-router-dom'

const AuthenticatedRoute = (props) => {
    if(!props.currentUser) {
        return <Redirect to="/" /> 
    } else {
        return <Route {...props} />
    }
}

export default WithAuthConsumer(AuthenticatedRoute)