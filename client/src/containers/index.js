import React, { Component } from 'react'

import RoutePage from './RoutePage'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container'>
        <RoutePage/>
      </div>
    )
  }
}

export default App