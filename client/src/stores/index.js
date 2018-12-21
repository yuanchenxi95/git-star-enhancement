import { reaction } from 'mobx'

import i18n from 'src/i18n'

import i18nStore from './i18n/index'
import routingStore from './routing/index'
import starsStore from './stars/index'

reaction(
  () => i18nStore.locale,
  locale => {
    i18n.changeLanguage(locale)
  }
)

const stores = {
  routingStore,
  i18nStore,
  starsStore,
}

export default stores
