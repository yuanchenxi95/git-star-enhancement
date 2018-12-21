
// import STAR_QUERY from '../graphql/stars.graphql'
import gql from 'graphql-tag'
import client from '../apollo'

export const STAR_QUERY = gql`
  query getStarsOfUser($username: String!) {
    stars(username: $username) {
      id
      githubRepository
      Tags {
        tagName
      }
    }
  }
  
`

export async function getStarsForUser({ username }) {
  const res = await client.query({
    query: STAR_QUERY,
    variables: {
      username,
    },
  })
  return res
}
