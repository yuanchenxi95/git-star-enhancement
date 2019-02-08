
import { GITHUB_LOGIN } from '../constants/apiEndpoint'

export const redirectToLogin = function() {
  window.location.href = GITHUB_LOGIN
}
