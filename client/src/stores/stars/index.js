import { observable, action } from 'mobx'

import {
  getStarsForUser,
} from '../../apollo/queries/stars'

import {
  addStarMutation,
} from '../../apollo/mutatations/stars'


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

  @action async addStar({ username, githubRepository, description, tags }) {
    self.error = null
    self.loading = true

    try {
      const { data } = await addStarMutation({
        username,
        githubRepository,
        description,
        tags,
      })
      console.log(data)
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

  @action async loadStars({ username }) {
    self.error = null
    self.loading = true

    try {
      const { data } = await getStarsForUser({
        username,
      })
      self.stars = data.stars
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }


}

const self = new StarsStore()

export default self
