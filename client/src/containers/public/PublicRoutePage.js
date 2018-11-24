import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import _ from 'lodash'
import { observer } from 'mobx-react/index'

import {
  CHINESE_TRANSLATION,
} from 'src/constants/route'

import { generateLoadablePage } from 'src/util/loadablePage'

import FallbackPage  from '../FallbackPage'
// const ChineseTranslationPage = generateLoadablePage(import('./ChineseTranslationPage/ChineseTranslationPage'))

@observer
class PublicRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Switch>
          {/*<Route path={CHINESE_TRANSLATION} component={ChineseTranslationPage} />*/}
          <Route component={FallbackPage}/>
        </Switch>
      </div>
    )
  }
}

export default PublicRoutePage
