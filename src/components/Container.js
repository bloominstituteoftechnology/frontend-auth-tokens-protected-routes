import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Login from './Login'
import Quotes from './QuoteList'

export function Container(props) {
  return (
    <div className='container'>
      <nav>
        <span>
          <NavLink exact to='/'>Quotes</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </span>
        <button>Logout</button>
      </nav>

      <main>
        <Route path='/login' component={Login} />

        {/* we need to fix this so we can't do this route
        unless there is a token in local storage */}
        <Route exact path='/' component={Quotes} />
      </main>
    </div>
  )
}

export default Container
