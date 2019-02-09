const INVALID_ID_FORMAT = 'invalid_id_format'
const INTERNAL_SERVER_ERROR = 'internal_server_error'

function generateCode(code, message) {
  return {
    code,
    message,
  }
}

const InvalidIdFormat = generateCode(INVALID_ID_FORMAT, 'Invalid ID format')

const InternalServerError = generateCode(INTERNAL_SERVER_ERROR, 'Internal Server Error')


const FailToValidateToken = generateCode('fail_to_validate_token', 'Fail to Validate Token')
const NoTokenProvided = generateCode('no_token_provided', 'No Token Provided')
const AccessTokenExpired = generateCode('access_token_expired', 'Access Token Expired')

module.exports = {
  InvalidIdFormat,
  InternalServerError,
  FailToValidateToken,
  NoTokenProvided,
  AccessTokenExpired,
}