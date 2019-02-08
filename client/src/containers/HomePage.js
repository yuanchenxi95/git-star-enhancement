import React, { Component } from 'react'

import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import { keys } from '../i18n/resources'
import { redirectToLogin } from '../util/index'

@withNamespaces()
class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
  }



  render() {
    const { t } = this.props

    return (
      <div>
        <h1>{t(keys.homePageText)}</h1>
        <Button onClick={redirectToLogin} block color={'success'}>
          Login with GitHub
        </Button>

        <br/>
      </div>
    )
  }
}

export default HomePage
