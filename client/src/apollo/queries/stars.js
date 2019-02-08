
// import STAR_QUERY from '../graphql/stars.graphql'
import gql from 'graphql-tag'
import client  from '../apollo'

export const STAR_QUERY = gql`
  query getStarsOfUser($username: String!) {
    stars(username: $username) {
      id
      githubRepository
      username
      description
      Tags {
        tagName
      }
    }
  }
  
`

export const TAG_QUERY = gql`
  query findAllTags {
    tags {
      tagName
    }
  }
`

export const STARS_WITH_TAGS_OR_QUERY = gql`
  query findStarsWithTagOrOperation($username: String, $tags: [String]) {
    starsWithTagOrOperation(username: $username, tags: $tags) {
      id
      githubRepository
      username
      description
      Tags {
        tagName
      }
    }
  }
`


export async function getStarsForUserWithTags({ username, tags }) {
  const res = await client.query({
    query: STARS_WITH_TAGS_OR_QUERY,
    variables: {
      username,
      tags,
    },
    fetchPolicy: 'network-only',
  })
  return res
}

export async function getStarsForUser({ username }) {
  const res = await client.query({
    query: STAR_QUERY,
    variables: {
      username,
    },
    fetchPolicy: 'network-only',
  })
  return res
}

export async function getAllTags() {
  const res = await client.query({
    query: TAG_QUERY,
    fetchPolicy: 'network-only',
  })
  return res
}
