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


const FailToValidateToken = generateCode(120, 'Fail to Validate Token')
const NoTokenProvided = generateCode(121, 'No Token Provided')

module.exports = {
  InvalidIdFormat,
  InternalServerError,
  FailToValidateToken,
  NoTokenProvided,
}