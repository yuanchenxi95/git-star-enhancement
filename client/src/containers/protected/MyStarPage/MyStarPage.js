import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { PropTypes as MobxPropTypes } from 'mobx-react'
// import './ChineseTranslationPage.css'
import { keys } from 'src/i18n/resources'

@inject(stores => {
  let { starsStore } = stores
  const { loadStars, loading, error, stars } = starsStore
  return {
    loadStars,
    stars,
    loading,
    error,
  }
})
@withNamespaces()
@observer
class ChineseTranslationPage extends Component {
  constructor(props) {
    super(props)
    this.renderStars = this.renderStars.bind(this)
  }


  static propTypes = {
    t: PropTypes.func.isRequired,
    loadStars: PropTypes.func.isRequired,
    stars: MobxPropTypes.observableArray,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }


  componentDidMount() {
    this.props.loadStars({
      'username': 'yuanchenxi93',
    })
  }

  renderStars() {
    const { stars } = this.props

    return (
      <div>
        {stars.map(star => {
          return (
            <div key={star.id}>
              {star.githubRepository}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>My star page</h1>
        {this.renderStars()}
      </div>
    )
  }
}

export default ChineseTranslationPage
