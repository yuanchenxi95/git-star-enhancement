import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ROOT,
  PUBLIC,
  PROTECTED,
  GITHUB_CALLBACK,
} from '../constants/route'
// import NavBar from 'src/components/NavBar'

import FallbackPage from './FallbackPage'
import HomePage from './HomePage'
import PublicRoutePage from './public/PublicRoutePage'
import ProtectedRoutePage from './protected/ProtectedRoutePage'
import GithubPage from './github/index'

class RoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/*<NavBar/>*/}
        <Switch>
          <Route exact path={ROOT} component={HomePage} />
          <Route path={PUBLIC} component={PublicRoutePage} />
          <Route path={GITHUB_CALLBACK} component={GithubPage} />
          <Route path={PROTECTED} component={ProtectedRoutePage} />
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default RoutePage