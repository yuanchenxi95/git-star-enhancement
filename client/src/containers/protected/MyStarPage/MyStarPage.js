import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { PropTypes as MobxPropTypes } from 'mobx-react'
import { Button } from 'reactstrap'
// import './ChineseTranslationPage.css'
import { keys } from 'src/i18n/resources'

@inject(stores => {
  let { starsStore } = stores
  const { loadStars, loading, error, stars, addStar } = starsStore
  return {
    loadStars,
    addStar,
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
    addStar: PropTypes.func.isRequired,
    stars: MobxPropTypes.observableArray,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }


  componentDidMount() {
    this.props.loadStars({
      'username': 'yuanchenxi95',
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
    const { addStar } = this.props

    return (
      <div>
        <h1>My star page</h1>
        <Button color="primary" onClick={() => addStar({
          username: 'yuanchenxi95',
          githubRepository: 'axios/axios',
        })}>Add Star</Button>
        {this.renderStars()}
      </div>
    )
  }
}

export default ChineseTranslationPage
