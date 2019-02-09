import { axios } from '../axios'

import { GITHUB_PROFILE } from '../constants'
import { generateHeaders } from '../util'

export async function getGithubProfile(accessToken) {
  return axios.get(GITHUB_PROFILE, {
    headers: generateHeaders(accessToken),
  })
}
