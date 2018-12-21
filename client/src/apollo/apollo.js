
import ApolloClient from 'apollo-boost'

import { GRAPHQL_ENDPOINT } from '../constants/config'

const apolloClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
})

export default apolloClient
