import { observable, action } from 'mobx'

import {
  getStarsForUser,
} from '../../apollo/queries/stars'

import {
  addStarMutation,
  removeStarMutation,
} from '../../apollo/mutatations/stars'


class StarsStore {
  @observable error = null
  @observable loading = false
  @observable username = ''
  @observable stars = []

  constructor() {
    // TODO remove this
    this.username = 'yuanchenxi95'
  }

  @action setUsername(username) {
    self.username = username
  }

  @action resetData() {
    self.error = null
    self.loading = false
    self.stars = []
  }

  @action async addStar({ githubRepository, description, tags }) {
    self.error = null
    self.loading = true
    const { username } = self
    try {
      await addStarMutation({
        username,
        githubRepository,
        description,
        tags,
      })

      await self.loadStars({ username })
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

  @action async removeStar({ id }) {
    self.error = null
    self.loading = true
    const { username } = self

    try {
      await removeStarMutation({
        id,
      })
      await self.loadStars({ username })
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

  @action async loadStars() {
    self.error = null
    self.loading = true
    const { username } = self

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
