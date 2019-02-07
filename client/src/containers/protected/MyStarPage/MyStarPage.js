import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { PropTypes as MobxPropTypes } from 'mobx-react'
import { Button } from 'reactstrap'
// import './ChineseTranslationPage.css'

import { keys } from 'src/i18n/resources'

import AddStarModal from 'src/components/AddStarModal'
import StarCard from 'src/components/StarCard'


@inject(stores => {
  let { starsStore } = stores
  const { loadStars, removeStar, loading, error, stars, addStar } = starsStore
  return {
    loadStars,
    removeStar,
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
    removeStar: PropTypes.func.isRequired,
    addStar: PropTypes.func.isRequired,
    stars: MobxPropTypes.observableArray,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }


  componentDidMount() {
    this.props.loadStars()
  }

  renderStars() {
    const { stars, removeStar } = this.props

    return (
      <div>
        {stars.map(star => {
          return (
            <StarCard key={star.id} star={star} removeStar={removeStar} />
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
        <AddStarModal addStar={addStar}/>
        {this.renderStars()}
      </div>
    )
  }
}

export default ChineseTranslationPage
