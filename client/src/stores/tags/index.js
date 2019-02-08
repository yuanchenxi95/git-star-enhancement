import { observable, action } from 'mobx'

import {
  getAllTags,
} from '../../apollo/queries/stars'


class TagsStore {
  @observable error = null
  @observable loading = false
  @observable tags = []
  @observable selectedTags = []

  constructor() {
  }

  @action resetData() {
    self.error = null
    self.loading = false
    self.tags = []
    self.selectedTags = []
  }

  @action setSelectedTags(tags) {
    self.selectedTags = tags
  }

  @action async loadTags() {
    self.error = null
    self.loading = true

    try {
      const { data } = await getAllTags()
      self.tags = data.tags
    } catch (err) {
      self.error = err.message
    }
    self.loading = false
  }


}

const self = new TagsStore()

export default self
