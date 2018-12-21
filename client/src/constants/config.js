import _ from 'lodash'

let apiEndPoint

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  apiEndPoint = process.env.API_ENDPOINT
} else {
  apiEndPoint = 'http://localhost:3000'
}

let graphqlEndpoint

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  graphqlEndpoint = process.env.GRAPHQL_ENDPOINT
} else {
  graphqlEndpoint = 'http://localhost:3000/graphql'
}

function getErrorString(variableName) {
  return 'Variable: ' + variableName + ' is not defined'
}

if (_.isNil(apiEndPoint)) {
  throw(getErrorString('API_ENDPOINT'))
}


if (_.isNil(graphqlEndpoint)) {
  throw(getErrorString('GRAPHQL_ENDPOINT'))
}

const API_ENDPOINT = apiEndPoint
const GRAPHQL_ENDPOINT = graphqlEndpoint

export {
  API_ENDPOINT,
  GRAPHQL_ENDPOINT,
}
