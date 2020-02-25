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
        {/* <Route path='/login' component={Login} /> */}
        <Route path='/login'>
          <Login foo='bar' />
        </Route>

        {/* we need to fix this so we can't do this route
        unless there is a token in local storage */}
        {/* <Route exact path='/' component={Quotes} /> */}

        <RouteProtected exact path='/'>
          <Quotes />
        </RouteProtected>
      </main>
    </div>
  )
}

function RouteProtected(props) {
  // pull token from local storage
  // return a "vanilla" Route component
  // inside it, build a ternary:
  // token truthy ? render what you were gonna
  // otherwise render a <Redirect to='login' />
  return ()
}

export default Container
