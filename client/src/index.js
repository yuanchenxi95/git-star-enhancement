import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import createHashHistory from 'history/createHashHistory'
import { I18nextProvider } from 'react-i18next'
import { syncHistoryWithStore } from 'mobx-react-router'

const hashHistory = createHashHistory()

import stores from './stores'
import App from './containers'
import i18n from './i18n'

const history = syncHistoryWithStore(hashHistory, stores.routingStore)
const rootElement = document.getElementById('45118caa-2c77-49d9-a293-4ce25d37c43c')
import { STAR_QUERY } from './apollo/queries/stars'

if (rootElement) {
  ReactDOM.render(
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <Router history={history}>
          <App/>
        </Router>
      </I18nextProvider>
    </Provider>,
    rootElement
  )
}
