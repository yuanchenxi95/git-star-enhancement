import React, { Component } from 'react'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { keys } from 'src/i18n/resources'

@translate()
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
