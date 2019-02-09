
import ApolloClient from 'apollo-boost'

import { GRAPHQL_ENDPOINT } from '../constants/config'
import authenticationStore from '../stores/authentication/index'

const apolloClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  request: async (operation) => {
    // dynamically set headers
    // const token = await AsyncStorage.getItem('token');
    const context = getContext()
    operation.setContext(context)
  },
})

function getContext() {
  return {
    headers: {
      'x-access-token': authenticationStore.xAccessToken,
    },
  }
}

export default apolloClient
