import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import PropTypes from 'prop-types'
import isNil from 'lodash/isNil'
import {observer, inject } from 'mobx-react/index'
import PropTypes from 'prop-types'

import {
  LOGIN_PAGE,
  MY_STAR_PAGE,
} from 'src/constants/route'

import { generateLoadablePage } from 'src/util/loadablePage'

import FallbackPage  from '../FallbackPage'
// const ChineseTranslationPage = generateLoadablePage(import('./ChineseTranslationPage/ChineseTranslationPage'))


const LoginPage = generateLoadablePage(import('./LoginPage/LoginPage'))

@inject(stores => {
  const { authenticationStore } = stores
  const { xAccessToken } = authenticationStore

  return {
    xAccessToken,
  }
})
@observer
class PublicRoutePage extends Component {
  constructor(props) {
    super(props)
  }


  static propTypes = {
    xAccessToken: PropTypes.string,
  }

  render() {

    const { xAccessToken } = this.props

    if (!isNil(xAccessToken)) {
      return <Redirect to={MY_STAR_PAGE}/>

    }
    return (
      <div>
        <Switch>
          {/*<Route path={CHINESE_TRANSLATION} component={ChineseTranslationPage} />*/}
          <Route path={LOGIN_PAGE} component={LoginPage} />
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default PublicRoutePage
