import { observable, action } from 'mobx'
import { getAccessToken, setAccessToken } from '../../util/cookies'

class authenticationStore {
  @observable error = null
  @observable loading = false
  @observable username = ''
  @observable xAccessToken = null
  @observable githubAccessToken = ''

  constructor() {
    this.xAccessToken = getAccessToken()
  }

  @action resetData() {
    self.error = null
    self.loading = false
    self.username = ''
    self.xAccessToken = null
    self.githubAccessToken = ''
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
