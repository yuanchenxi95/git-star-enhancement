import { observable, action } from 'mobx'
import isNil from 'lodash/isNil'

import { getAccessToken, setAccessToken } from '../../util/cookies'
import { getGithubProfile } from '../../api/methods/authentication'

class authenticationStore {
  @observable error = null
  @observable loading = false
  @observable username = null
  @observable xAccessToken = null
  @observable githubAccessToken = ''

  constructor() {
    this.xAccessToken = getAccessToken()
  }

  @action resetData() {
    self.error = null
    self.loading = false
    self.username = null
    self.xAccessToken = null
    self.githubAccessToken = ''
  }

  @action async getGithubProfile() {
    self.loading = true
    try {

      const { data } = await getGithubProfile(self.xAccessToken)
      const { username, accessToken } = data
      self.username = username
      self.githubAccessToken = accessToken
    } catch (e) {
      self.error = e.message
      self.setXAccessToken(null)
    }
    self.loading = false
  }

  @action setXAccessToken(token) {
    self.xAccessToken = token
    setAccessToken(token)
  }

  @action logOut() {
    self.setXAccessToken(null)
  }

}

const self = new authenticationStore()

export default self
