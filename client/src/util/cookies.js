import Cookies from 'js-cookie'

const ACCESS_TOKEN = 'ACCESS_TOKEN'

export function setAccessToken(token) {
  Cookies.set(ACCESS_TOKEN, token)
}

export function getAccessToken() {
  return Cookies.get(ACCESS_TOKEN)
}

