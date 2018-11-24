import {observable, action } from 'mobx'


class i18n {
  @observable locale;


  constructor() {

  }

  @action setLocaleToEnglish() {
    self.locale = 'en'
  }

  @action setLocaleToChinese() {
    self.locale = 'zh'
  }
}

const self = new i18n()

export default self