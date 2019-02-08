import { observable, action } from 'mobx'


class authenticationStore {
  @observable error = null
  @observable loading = false
  @observable username = ''
  @observable xAccessToken = ''
  @observable githubAccessToken = ''

  constructor() {
  }

  @action resetData() {
    self.error = null
    self.loading = false
    self.username = ''
    self.xAccessToken = ''
    self.githubAccessToken = ''
  }

  @action setXAccessToken(token) {
    self.xAccessToken = token
  }

}

const self = new authenticationStore()

export default self
