import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import Login from './Login'
import Quotes from './QuoteList'
import axios from 'axios'

const loginURL = 'http://localhost:3333/login'

export function Container(props) {
  const onLogout = event => {

  }

  const onLogin = ({ username, password }) => {
    axios.post(
      loginURL,
      { username, password }
    )
      .then(res => {
        props.history.push('/')
      })
      .catch(error => {
        debugger
      })
  }

  return (
    <div className='container'>
      <nav>
        <span>
          <NavLink exact to='/'>Quotes</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          path='/login'
          render={props => <Login {...props} onLogin={onLogin} />}
        />
        <Route
          exact
          path='/'
          render={props => <Quotes {...props} />}
        />
      </main>
    </div>
  )
}

export default withRouter(Container)
