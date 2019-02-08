import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import _ from 'lodash'
import { observer, inject } from 'mobx-react/index'
import PropTypes from 'prop-types'

// import { generateLoadablePage } from 'src/util/loadablePage'
// import FallbackPage  from '../FallbackPage'
// const ChineseTranslationPage = generateLoadablePage(import('./ChineseTranslationPage/ChineseTranslationPage'))


@inject(stores => {
  let { authenticationStore, redirectingStore } = stores
  let { setXAccessToken } = authenticationStore
  let { redirectToMyStarPage } = redirectingStore
  return {
    setXAccessToken, redirectToMyStarPage,
  }
})
@observer
class GithubPage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    match: PropTypes.object,
    setXAccessToken: PropTypes.func.isRequired,
    redirectToMyStarPage: PropTypes.func.isRequired,
    // logOut: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { token } = this.props.match.params
    this.props.setXAccessToken(token)
    this.props.redirectToMyStarPage()
  }

  render() {

    return (
      <div>
        {this.props.match.params.token}
      </div>
    )
  }
}

export default GithubPage
