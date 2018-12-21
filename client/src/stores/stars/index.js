import { observable, action } from 'mobx'
import _ from 'lodash'

import {
  getStarsForUser,
} from '../../apollo/queries/stars'


class StarsStore {
  @observable error = null
  @observable loading = false
  @observable stars = []

  constructor() {

  }

  @action resetData() {
    self.error = null
    self.loading = false
    self.stars = []
  }

  @action async loadStars({ username }) {
    self.error = null
    self.loading = true

    try {
      const { data } = await getStarsForUser({
        username,
      })
      console.log(data)
      self.stars = data.stars
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }


}

const self = new StarsStore()

export default self
