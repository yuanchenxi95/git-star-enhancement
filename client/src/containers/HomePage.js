import React, { Component } from 'react'

import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import { keys } from '../i18n/resources'
import { inject } from 'mobx-react'


@inject(stores => {
  let { redirectingStore } = stores
  let { redirectToLoginPage } = redirectingStore
  return {
    redirectToLoginPage,
  }
})
@withNamespaces()
class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    redirectToLoginPage: PropTypes.func.isRequired,
  }



  render() {
    // const { t } = this.props
    const { redirectToLoginPage } = this.props

    return (
      <div>
        <h1>Home Page</h1>
        <Button onClick={redirectToLoginPage} block color={'success'}>
          Login
        </Button>

        <br/>
      </div>
    )
  }
}

export default HomePage
