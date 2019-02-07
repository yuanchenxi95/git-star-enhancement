
// import STAR_QUERY from '../graphql/stars.graphql'
import gql from 'graphql-tag'
import client from '../apollo'

const ADD_STAR_MUTATION = gql`
  mutation addStar($username: String!, $githubRepository: String!, $description: String, $tags: [String]) {
    addStar(username: $username, githubRepository: $githubRepository, description: $description, tags: $tags) {
      id
      username
      githubRepository
      description
      Tags {
        tagName
      }
    }
  }
`

const REMOVE_STAR_MUTATION = gql`
  mutation removeStar($id: ID!) {
    removeStar(id: $id) {
      id
    }
  }
`

export async function addStarMutation({ username, githubRepository, description, tags }) {
  const res = await client.mutate({
    mutation: ADD_STAR_MUTATION,
    variables: {
      username, githubRepository, description, tags,
    },
  })
  return res
}


export async function removeStarMutation({ id }) {
  const res = await client.mutate({
    mutation: REMOVE_STAR_MUTATION,
    variables: {
      id,
    },
  })
  return res
}
