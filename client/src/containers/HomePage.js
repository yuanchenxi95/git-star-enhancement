import React, { Component } from 'react'

import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'

import { keys } from 'src/i18n/resources'

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
        <br/>
      </div>
    )
  }
}

export default HomePage
