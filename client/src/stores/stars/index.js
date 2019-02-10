import { observable, action } from 'mobx'
import map from 'lodash/map'

import tagsStore from '../tags'

import {
  getStarsForUser,
  getStarsForUserWithTags,
} from '../../apollo/queries/stars'

import {
  addStarMutation, editStarMutation,
  removeStarMutation,
} from '../../apollo/mutatations/stars'

import authenticationStore from '../authentication/index'

function mapTagNameToTags(stars) {
  return map(stars, (star) => {
    const newStar = Object.assign({}, star)

    newStar.tags = map(newStar.tags, (t) => {
      return t.tagName
    })
    return newStar
  })
}

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

  @action async addStar({ githubRepository, description, tags }) {
    self.error = null
    self.loading = true
    const { username } = authenticationStore
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

  @action async editStar({ id, description, tags }) {
    self.error = null
    self.loading = true
    const { username } = authenticationStore
    try {
      await editStarMutation({
        id,
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
    const { username } = authenticationStore

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

  @action async loadStarsWithTags() {
    self.error = null
    self.loading = true
    const { username } = authenticationStore
    const { selectedTags } = tagsStore

    try {
      const { data } = await getStarsForUserWithTags({
        username,
        tags: selectedTags,
      })
      const { starsWithTagOrOperation } = data
      const newStars = mapTagNameToTags(starsWithTagOrOperation)
      self.stars = newStars
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }

  @action async loadStars() {
    self.error = null
    self.loading = true
    const { username } = authenticationStore
    try {
      const { data } = await getStarsForUser({
        username,
      })
      const { stars } = data
      const newStars = mapTagNameToTags(stars)
      self.stars = newStars
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }


}

const self = new StarsStore()

export default self
