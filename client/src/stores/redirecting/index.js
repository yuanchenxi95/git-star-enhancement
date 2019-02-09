import { action } from 'mobx'
import {LOGIN_PAGE, MY_STAR_PAGE} from 'src/constants/route'

import routingStore from '../routing'

class redirectingStore {
  @action redirectToMyStarPage() {
    routingStore.push(MY_STAR_PAGE)
  }

  @action redirectToLoginPage() {
    routingStore.push(LOGIN_PAGE)
  }
}

const self = new redirectingStore()

export default self
