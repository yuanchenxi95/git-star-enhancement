import { action } from 'mobx'
import { MY_STAR_PAGE } from 'src/constants/route'

import routingStore from '../routing'

class redirectingStore {
  @action redirectToMyStarPage() {
    routingStore.push(MY_STAR_PAGE)
  }
}

const self = new redirectingStore()

export default self
