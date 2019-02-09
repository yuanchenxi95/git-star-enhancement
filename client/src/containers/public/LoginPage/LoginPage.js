import { observer } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
// import './ChineseTranslationPage.css'

// import { keys } from 'src/i18n/resources'
import { redirectToLogin } from '../../../util/index'

//
// @inject(stores => {
//   let { starsStore, tagsStore } = stores
//   const { loadStars, loadStarsWithTags, removeStar, loading, error, stars, addStar } = starsStore
//   const { loadTags, setSelectedTags } = tagsStore
//   return {
//     loadTags,
//     setSelectedTags,
//     loadStars,
//     loadStarsWithTags,
//     removeStar,
//     addStar,
//     stars,
//     loading,
//     error,
//   }
// })
@withNamespaces()
@observer
class LoginPage extends Component {
  constructor(props) {
    super(props)
  }


  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  render() {

    return (
      <div>
        <h1>Login Page</h1>
        <Button onClick={redirectToLogin} block color={'primary'}>
          Login with GitHub
        </Button>
      </div>
    )
  }
}

export default LoginPage
