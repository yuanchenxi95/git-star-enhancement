import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
// import _ from 'lodash'
import isNil from 'lodash/isNil'

import {
  LOGIN_PAGE,
  MY_STAR_PAGE,
} from 'src/constants/route'
import { generateLoadablePage } from 'src/util/loadablePage'

import FallbackPage from '../FallbackPage'
import NavBar from 'src/components/NavBar'

// const TransitRoutePage = generateLoadablePage(import('./transit/TransitRoutePage'))
const MyStarPage = generateLoadablePage(import('./MyStarPage/MyStarPage'))


@inject(stores => {
  const { authenticationStore } = stores
  let { xAccessToken } = authenticationStore
  return {
    xAccessToken,
    // validateToken,
  }
})
@observer
class ProtectedRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.validateToken()
  }

  static propTypes = {
    xAccessToken: PropTypes.string,
    // validateToken: PropTypes.func,
  }

  render() {
    const { xAccessToken } = this.props

    if (isNil(xAccessToken)) {
      return <Redirect to={LOGIN_PAGE}/>
    }

    return (
      <div>
        <NavBar/>
        <Switch>
          {/*<Route path={HOME} component={UserHome} />*/}
          <Route path={MY_STAR_PAGE} component={MyStarPage} />
          <Route component={FallbackPage} />
        </Switch>
      </div>
    )
  }
}

export default ProtectedRoutePage
