
export function generateHeaders(accessToken) {
  return {
    'x-access-token': accessToken,
  }
}
